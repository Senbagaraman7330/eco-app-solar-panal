import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { asset } from '../../lib/asset';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navTabsRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  interface NavItem {
    label: string;
    path: string;
    children?: { label: string; path: string }[];
  }

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Solar Solutions',
      path: '/services',
      children: [
        { label: 'On-Grid Solar', path: '/services#on-grid' },
        { label: 'Off-Grid Solar', path: '/services#off-grid' },
        { label: 'Hybrid Solar', path: '/services#hybrid' },
        { label: 'BESS / Energy Storage', path: '/services#bess' },
      ],
    },
    { label: 'Contact Us', path: '/contact' },
  ];

  // Check active route
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/index.html';
    }
    return location.pathname.startsWith(path) || location.pathname === `${path}.html`;
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Update nav indicator position
  useEffect(() => {
    if (!navTabsRef.current || !indicatorRef.current) return;
    const activeItem = navTabsRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeItem) {
      indicatorRef.current.style.left = `${activeItem.offsetLeft}px`;
      indicatorRef.current.style.width = `${activeItem.offsetWidth}px`;
      indicatorRef.current.style.height = `${activeItem.offsetHeight}px`;
      indicatorRef.current.style.opacity = '1';
    } else {
      indicatorRef.current.style.opacity = '0';
    }
  }, [location.pathname]);

  // Handle escape key for search modal & mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header
        data-header-shell
        className="header-scroll border-stroke-1/25 fixed top-0 left-1/2 z-50 h-20 w-full -translate-x-1/2 border-b bg-white"
      >
        <nav data-block-reveal data-delay="0.1" data-direction="top" className="main-container h-full">
          <div data-header-padding className="header-padding flex h-full items-center justify-between">
            {/* logo desktop */}
            <figure className="hidden items-center lg:flex">
              <Link to="/" className="flex items-center">
                <img
                  src={asset('/assets/image/logo-ecoapps.png')}
                  alt="Eco Apps Solutions"
                  className="h-10 w-auto max-h-10 max-w-[210px] object-contain"
                />
              </Link>
            </figure>

            {/* logo small */}
            <figure className="flex min-w-0 shrink-0 items-center lg:hidden">
              <Link to="/" className="flex min-w-0 max-w-full items-center">
                <img
                  src={asset('/assets/image/logo-ecoapps.png')}
                  alt="Eco Apps Solutions"
                  className="mobile-header-logo block max-w-full object-contain"
                />
              </Link>
            </figure>

            {/* nav items desktop */}
            <ul
              ref={navTabsRef}
              data-nav-tabs
              className="shadow-1 relative hidden items-center justify-center rounded-xl p-1.5 lg:flex"
            >
              <div
                ref={indicatorRef}
                data-nav-indicator
                className="bg-background-4 pointer-events-none absolute rounded-lg transition-all duration-300 ease-out"
                aria-hidden="true"
              ></div>

              {navItems.map((item) => {
                const active = isActive(item.path);
                if (item.children) {
                  return (
                    <li
                      key={item.path}
                      ref={dropdownRef}
                      data-nav-item
                      data-active={active ? 'true' : 'false'}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="group/dropdown text-tagline-2 font-inter-tight text-background-4/60 relative z-30 rounded-lg px-4 py-2 font-normal transition-colors duration-300 ease-in-out hover:text-white data-[active=true]:text-white"
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsDropdownOpen((prev) => !prev);
                        }}
                        className="flex items-center gap-1.5 cursor-pointer focus:outline-none"
                        aria-expanded={isDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-white' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      {/* Dropdown Card */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3.5 transition-all duration-200 ease-out z-999 w-max min-w-[230px] ${
                          isDropdownOpen
                            ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                            : 'opacity-0 invisible translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div className="bg-[#05101E] border border-white/15 shadow-[0_20px_45px_rgba(0,0,0,0.6)] rounded-2xl p-2 space-y-1">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setIsDropdownOpen(false)}
                              className="group/sub flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 whitespace-nowrap transition-all duration-200 hover:bg-white/10 text-white"
                            >
                              <span className="font-inter-tight text-sm font-normal text-white group-hover/sub:text-[#B4E50D] transition-colors whitespace-nowrap">
                                {sub.label}
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-3.5 shrink-0 text-white/40 opacity-0 -translate-x-1 transition-all duration-200 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 group-hover/sub:text-[#B4E50D]"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li
                    key={item.path}
                    data-nav-item
                    data-active={active ? 'true' : 'false'}
                    className="text-tagline-2 font-inter-tight text-background-4/60 relative z-10 rounded-lg px-4 py-2 font-normal transition-colors duration-300 ease-in-out hover:text-white data-[active=true]:text-white"
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>

            {/* buttons desktop */}
            <div className="shadow-1 hidden items-center justify-center gap-x-5 rounded-xl p-1.5 py-1.5 pr-1.5 pl-6 lg:flex">
              <button
                type="button"
                data-search-modal-open
                aria-label="Open search"
                aria-expanded={isSearchOpen}
                onClick={() => setIsSearchOpen(true)}
                className="cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <Link to="/contact">
                <button className="group/subscribe btn-primary font-inter-tight text-tagline-2 flex h-10 w-full items-center justify-center gap-x-1 rounded-xl bg-[#323A44] px-4 py-2 font-normal text-white">
                  <span>Get Assessment</span>
                  <span className="icon-slide-track">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 shrink-0 blur-none [transition:translate_0.55s_var(--ease-bouncy)] group-hover/subscribe:translate-x-full"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6 shrink-0 -translate-x-full blur-none [transition:translate_0.55s_var(--ease-bouncy)] group-hover/subscribe:translate-x-0"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M3.75 12H20.25"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.5 5.25L20.25 12L13.5 18.75"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* buttons mobile */}
            <button
              type="button"
              data-mobile-menu-toggle
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(true)}
              className="shadow-1 bg-background-4 flex size-10 shrink-0 items-center justify-center rounded-xl backdrop-blur-[62px] lg:hidden cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="size-6" viewBox="0 0 640 640">
                <path d="M64 160C64 142.3 78.3 128 96 128L480 128C497.7 128 512 142.3 512 160C512 177.7 497.7 192 480 192L96 192C78.3 192 64 177.7 64 160zM128 320C128 302.3 142.3 288 160 288L544 288C561.7 288 576 302.3 576 320C576 337.7 561.7 352 544 352L160 352C142.3 352 128 337.7 128 320zM512 480C512 497.7 497.7 512 480 512L96 512C78.3 512 64 497.7 64 480C64 462.3 78.3 448 96 448L480 448C497.7 448 512 462.3 512 480z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        data-mobile-menu-overlay
        onClick={() => setIsMobileMenuOpen(false)}
        className={`bg-background-1 fixed inset-0 z-50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Aside */}
      <aside
        data-mobile-menu
        className={`fixed inset-y-0 right-0 z-60 flex w-full max-w-full flex-col transition-all duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 visible translate-x-0 pointer-events-auto'
            : 'opacity-0 invisible translate-x-full pointer-events-none'
        }`}
        aria-hidden={!isMobileMenuOpen}
        aria-label="Mobile navigation"
      >
        <div className="bg-background-1/95 flex h-full flex-col overflow-y-auto p-6 sm:p-8 backdrop-blur-md">
          <div className="mb-10 flex items-center justify-between">
            <figure className="min-w-0 shrink-0 opacity-100">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex max-w-full items-center">
                <img src={asset('/assets/image/logo-ecoapps.png')} alt="Eco Apps Solutions" className="mobile-menu-logo block max-w-full object-contain" />
              </Link>
            </figure>
            <button
              type="button"
              data-mobile-menu-close
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-background-4 flex size-10 cursor-pointer items-center justify-center rounded-xl shadow-[0_1px_1px_0_rgba(255,255,255,0.15)_inset]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex-1">
            <ul className="h-full space-y-6 pt-8 sm:space-y-7">
              {navItems.map((item) => (
                <li key={item.path} className="space-y-3">
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex items-center justify-between"
                  >
                    <span className="text-it-heading-4 text-background-4 group-hover:text-background-4/70 font-medium uppercase transition-colors">
                      {item.label}
                    </span>
                  </Link>

                  {item.children && (
                    <ul className="pl-4 space-y-2.5 border-l border-black/15 my-2">
                      {item.children.map((sub) => (
                        <li key={sub.path}>
                          <Link
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="font-inter-tight text-base font-normal text-background-4/70 hover:text-background-4 block transition-colors"
                          >
                            • {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Search Modal */}
      {isSearchOpen && (
        <div
          data-search-modal-overlay
          onClick={() => setIsSearchOpen(false)}
          className="bg-background-1/40 fixed inset-0 z-9999 flex items-start justify-center backdrop-blur-sm p-4 pt-20"
          role="dialog"
          aria-modal="true"
        >
          <div
            data-search-modal
            onClick={(e) => e.stopPropagation()}
            className="animate-keep-bounce relative mx-auto w-full max-w-2xl overflow-hidden"
          >
            <div className="bg-background-2 shadow-2 overflow-hidden rounded-2xl border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <h3 className="text-satoshi-heading-5 text-background-1 font-medium">Search</h3>
                <button
                  type="button"
                  data-search-modal-close
                  aria-label="Close search"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-background-4/60 hover:text-background-4 cursor-pointer transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <div className="p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className="relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-background-1/80 absolute top-1/2 left-4 size-5 -translate-y-1/2"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 21L16.65 16.65"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <input
                    type="search"
                    data-search-input
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-background-1/40 text-background-1 placeholder:text-background-1/40 w-full rounded-xl border border-white/10 px-12 py-3 transition-all duration-300 focus:border-white/20 focus:outline-none"
                    autoComplete="off"
                    spellCheck="false"
                    autoFocus
                  />
                </form>

                <p className="text-background-1/40 mt-4">
                  Powered by <Link to="/" className="text-background-1 font-medium">Eco Apps Solutions</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
