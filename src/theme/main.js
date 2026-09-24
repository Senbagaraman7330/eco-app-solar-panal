const avatar = {
  init() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const avatars = document.querySelectorAll("[data-avatar-image]");
    avatars.forEach((el) => {
      const delay = el.dataset.avatarDelay ? Number.parseFloat(el.dataset.avatarDelay) : 0;
      const direction = el.dataset.avatarDirection || "left";
      const scale = el.dataset.avatarScale ? Number.parseFloat(el.dataset.avatarScale) : 0;
      const offset = el.dataset.avatarOffset ? Number.parseFloat(el.dataset.avatarOffset) : 0;
      const animationProps = {
        duration: 1.5,
        opacity: 0,
        scale,
        filter: "blur(5px)",
        delay,
        ease: "elastic.out(1, 0.7)",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 20%"
        }
      };
      switch (direction) {
        case "left":
          animationProps.x = -offset;
          break;
        case "right":
          animationProps.x = offset;
          break;
        case "down":
          animationProps.y = offset;
          break;
        case "up":
        default:
          animationProps.y = -offset;
          break;
      }
      gsap.from(el, animationProps);
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  avatar.init();
});
const borderExpand = {
  init() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const lengthElements = document.querySelectorAll("[data-border-expand]");
    lengthElements.forEach((element) => {
      const delay = element.dataset.delay ? Number.parseFloat(element.dataset.delay) : 0;
      const top = element.dataset.top || "top 100%";
      const markerId = element.dataset.markerId || false;
      const duration = element.dataset.duration ? Number.parseFloat(element.dataset.duration) : 1.6;
      gsap.set(element, {
        scaleX: 0,
        transformOrigin: "center center"
      });
      gsap.to(element, {
        scaleX: 1,
        duration,
        ease: "power3.out",
        delay,
        scrollTrigger: {
          trigger: element,
          start: top,
          end: "top 100%",
          toggleActions: "play none none none",
          markers: Boolean(markerId),
          id: markerId || void 0
        }
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  borderExpand.init();
});
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const getNumber = (value, fallback) => {
  const number = Number.parseFloat(value);
  return Number.isNaN(number) ? fallback : number;
};
const setCircleTextSize = (text) => {
  const size = Math.min(text.offsetWidth, text.offsetHeight);
  if (!size) return;
  const fontRatio = getNumber(text.dataset.circleFontRatio, 0.075);
  const minFontSize = getNumber(text.dataset.circleMinFontSize, 10);
  const maxFontSize = getNumber(text.dataset.circleMaxFontSize, 18);
  const radiusRatio = getNumber(text.dataset.circleRadiusRatio, 0.42);
  const fontSize = clamp(size * fontRatio, minFontSize, maxFontSize);
  const radius = Math.min(size * radiusRatio, size / 2 - fontSize);
  const fontWeight = text.dataset.circleFontWeight || "500";
  text.style.setProperty("--circle-text-font-size", `${fontSize}px`);
  text.style.setProperty("--circle-text-font-weight", fontWeight);
  text.style.setProperty("--circle-text-radius", `${radius}px`);
};
const renderCircleText = (text, angleStep) => {
  const sourceText = text.dataset.circleTextContent || text.textContent.trim();
  if (!sourceText) return;
  const chars = Array.from(sourceText);
  const itemAngleStep = getNumber(text.dataset.circleAngleStep, angleStep || 360 / chars.length);
  text.dataset.circleTextContent = sourceText;
  text.setAttribute("aria-label", sourceText);
  text.replaceChildren();
  chars.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.setAttribute("aria-hidden", "true");
    span.style.setProperty("--circle-text-angle", `${index * itemAngleStep}deg`);
    text.append(span);
  });
};
const initCircleText = (selector = "[data-circle-text]", angleStep = null) => {
  const textElements = document.querySelectorAll(selector);
  if (!textElements.length) return;
  requestAnimationFrame(() => {
    textElements.forEach((text) => {
      renderCircleText(text, angleStep);
      setCircleTextSize(text);
      if ("ResizeObserver" in window) {
        const observer = new ResizeObserver(() => setCircleTextSize(text));
        observer.observe(text);
      } else {
        window.addEventListener("resize", () => setCircleTextSize(text));
      }
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => initCircleText());
} else {
  initCircleText();
}
const initCounterNumberOnScroll = () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  const counterTriggers = document.querySelectorAll("[data-counter-trigger]");
  counterTriggers.forEach((counterTrigger) => {
    const counterFlow = counterTrigger.querySelector("[data-counter-number]");
    const counterValue = Number(counterTrigger.dataset.counterValue) || 0;
    const counterDuration = Number(counterTrigger.dataset.counterDuration) || 1.8;
    const counterFractionDigits = Number(counterTrigger.dataset.counterFractionDigits) || 0;
    if (!counterFlow || typeof counterFlow.update !== "function") return;
    counterFlow.trend = 0;
    counterFlow.format = {
      useGrouping: counterTrigger.dataset.counterUseGrouping !== "false",
      maximumFractionDigits: counterFractionDigits,
      minimumFractionDigits: counterFractionDigits
    };
    counterFlow.update(0);
    ScrollTrigger.create({
      trigger: counterTrigger,
      start: "top 90%",
      once: true,
      onEnter: () => {
        counterFlow.transformTiming = { duration: counterDuration * 1e3, easing: "ease-out" };
        counterFlow.spinTiming = { duration: counterDuration * 1e3, easing: "ease-out" };
        counterFlow.opacityTiming = {
          duration: Math.max(250, counterDuration * 450),
          easing: "ease-out"
        };
        counterFlow.update(counterValue);
      }
    });
  });
};
document.addEventListener("DOMContentLoaded", () => {
  initCounterNumberOnScroll();
});
const initFooterTitleSweep = () => {
  const title = document.querySelector("[data-footer-title]");
  if (!title) return;
  const splitTextToChars = (textEl) => {
    const text = textEl.textContent;
    textEl.textContent = "";
    return Array.from(text).map((char) => {
      const charEl = document.createElement("span");
      charEl.className = "footer-title-char";
      charEl.textContent = char;
      textEl.append(charEl);
      return charEl;
    });
  };
  const setTextGradient = (charEl, gradient) => {
    charEl.style.background = gradient;
    charEl.style.backgroundClip = "text";
    charEl.style.webkitBackgroundClip = "text";
    charEl.style.webkitTextFillColor = "transparent";
  };
  const easeOutCubic = (progress) => 1 - (1 - progress) ** 3;
  const easeInCubic = (progress) => progress ** 3;
  const getCycleProgress = (frame2, offset, enter, hold, exit, pause) => {
    if (frame2 < offset) return 0;
    const duration = enter + hold + exit + pause;
    const time = (frame2 - offset) % duration;
    if (time < enter) return easeOutCubic(time / enter);
    if (time < enter + hold) return 1;
    if (time < enter + hold + exit) return 1 - easeInCubic((time - enter - hold) / exit);
    return 0;
  };
  const createSweepGradient = (progress) => {
    const highlightPosition = progress * 130 - 15;
    const start = (highlightPosition - 18).toFixed(1);
    const middle = highlightPosition.toFixed(1);
    const end = (highlightPosition + 18).toFixed(1);
    return `linear-gradient(90deg,
      #c7d7e2 0%,
      #eef8ff ${start}%,
      #3d4753 ${middle}%,
      rgba(238, 248, 255, 0.08) ${end}%,
      rgba(238, 248, 255, 0) 100%)`;
  };
  const chars = splitTextToChars(title);
  if (!chars.length) return;
  const timing = {
    stagger: 8,
    enter: 84,
    hold: 20,
    exit: 58,
    pause: 36
  };
  let frame = 0;
  const animate = () => {
    frame += 1;
    chars.forEach((charEl, index) => {
      const progress = getCycleProgress(
        frame,
        index * timing.stagger,
        timing.enter,
        timing.hold,
        timing.exit,
        timing.pause
      );
      setTextGradient(charEl, createSweepGradient(progress));
    });
    requestAnimationFrame(animate);
  };
  animate();
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFooterTitleSweep);
} else {
  initFooterTitleSweep();
}
const initSearchModal = () => {
  const openBtns = document.querySelectorAll("[data-search-modal-open]");
  const overlay = document.querySelector("[data-search-modal-overlay]");
  const closeBtn = document.querySelector("[data-search-modal-close]");
  if (!openBtns.length || !overlay || !closeBtn) return;
  const open = () => {
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    document.body.style.overflow = "";
  };
  openBtns.forEach((btn) => btn.addEventListener("click", open));
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("flex")) close();
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSearchModal);
} else {
  initSearchModal();
}
const is404Page = () => /\/404(?:\.html)?$/i.test(window.location.pathname);
const normalizePage = (value) => {
  if (!value || value === "/" || value === "./") return "index.html";
  const page = value.replace(/^\.\//, "").split("/").pop() || "index.html";
  return page === "" ? "index.html" : page;
};
const initMobileMenu = () => {
  if (typeof gsap === "undefined" || is404Page()) return;
  const toggle = document.querySelector("[data-mobile-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  const overlay = document.querySelector("[data-mobile-menu-overlay]");
  const closeBtn = document.querySelector("[data-mobile-menu-close]");
  const headerShell = document.querySelector("[data-header-shell]");
  const revealItems = menu ? [...menu.querySelectorAll("[data-mobile-menu-item]")] : [];
  if (!toggle || !menu || !overlay || !headerShell) return;
  let isOpen = false;
  let isAnimating = false;
  gsap.set(menu, { xPercent: 100, autoAlpha: 0 });
  gsap.set(overlay, { autoAlpha: 0 });
  gsap.set(headerShell, { transformOrigin: "50% 0%", scale: 1 });
  const setPageLock = (locked) => {
    document.body.style.overflow = locked ? "hidden" : "";
  };
  const canReveal2 = () => typeof gsap !== "undefined" && typeof SplitText !== "undefined";
  const getRevealDelay2 = (el) => {
    const parsed = Number.parseFloat(el.dataset.revealDelay);
    return Number.isNaN(parsed) ? 0.1 : parsed;
  };
  const cleanupReveal2 = (el) => {
    var _a, _b;
    if (!canReveal2()) return;
    (_b = (_a = el._splitText) == null ? void 0 : _a.revert) == null ? void 0 : _b.call(_a);
    delete el._splitText;
    gsap.killTweensOf(el.querySelectorAll(".text-reveal-line"));
  };
  let revealInitDone = false;
  const initReveal = () => {
    if (revealInitDone) return;
    revealInitDone = true;
    if (!canReveal2()) return;
    gsap.registerPlugin(SplitText);
  };
  const revealElement2 = (el) => {
    if (!canReveal2()) {
      gsap.set(el, { opacity: 1 });
      return;
    }
    initReveal();
    cleanupReveal2(el);
    el._splitText = new SplitText(el, {
      type: "lines",
      mask: "lines",
      linesClass: "text-reveal-line"
    });
    gsap.set(el, { opacity: 1 });
    gsap.fromTo(
      el._splitText.lines,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        delay: getRevealDelay2(el)
      }
    );
  };
  const hideReveal2 = (el) => {
    var _a, _b;
    if (!canReveal2()) {
      gsap.set(el, { opacity: 0 });
      return;
    }
    if (!((_b = (_a = el._splitText) == null ? void 0 : _a.lines) == null ? void 0 : _b.length)) {
      cleanupReveal2(el);
      gsap.set(el, { opacity: 0 });
      return;
    }
    gsap.killTweensOf(el._splitText.lines);
    gsap.to(el._splitText.lines, {
      yPercent: 110,
      duration: 0.35,
      ease: "power2.in",
      stagger: 0.03,
      onComplete: () => {
        cleanupReveal2(el);
        gsap.set(el, { opacity: 0 });
      }
    });
  };
  const revealMenuItems = () => {
    revealItems.forEach((el) => revealElement2(el));
  };
  const hideMenuItems = () => {
    revealItems.forEach((el) => hideReveal2(el));
  };
  const open = () => {
    if (isOpen || isAnimating) return;
    isAnimating = true;
    isOpen = true;
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    menu.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    menu.classList.remove("pointer-events-none");
    menu.classList.remove("invisible");
    overlay.classList.remove("pointer-events-none");
    setPageLock(true);
    gsap.timeline({
      onComplete: () => {
        isAnimating = false;
      }
    }).to(headerShell, { scale: 0.95, duration: 0.5, ease: "power3.inOut" }).to(overlay, { autoAlpha: 1, duration: 0.35, ease: "power2.out" }, "-=0.3").to(menu, { xPercent: 0, autoAlpha: 1, duration: 0.7, ease: "power3.out" }, "-=0.15").add(revealMenuItems, "-=0.4");
  };
  const close = () => {
    if (!isOpen || isAnimating) return;
    isAnimating = true;
    hideMenuItems();
    gsap.timeline({
      onComplete: () => {
        isOpen = false;
        isAnimating = false;
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        menu.setAttribute("aria-hidden", "true");
        overlay.setAttribute("aria-hidden", "true");
        menu.classList.add("pointer-events-none");
        menu.classList.add("invisible");
        overlay.classList.add("pointer-events-none");
        setPageLock(false);
      }
    }).to(menu, { xPercent: 100, autoAlpha: 0, duration: 0.55, ease: "power3.in" }, 0.1).to(overlay, { autoAlpha: 0, duration: 0.35, ease: "power2.in" }, "-=0.35").to(headerShell, { scale: 1, duration: 0.5, ease: "power3.out" }, "-=0.3");
  };
  toggle.addEventListener("click", () => isOpen ? close() : open());
  closeBtn == null ? void 0 : closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) close();
  });
  const currentPage = normalizePage(window.location.pathname);
  menu.querySelectorAll("[data-mobile-menu-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    if (normalizePage(href) === currentPage) {
      link.classList.add("active-menu");
    }
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMobileMenu);
} else {
  initMobileMenu();
}
const CLOSE_DELAY = 120;
const MENU_DURATION = 0.5;
const ITEM_STAGGER = 0.025;
function initHeaderMenus() {
  const header = document.querySelector("header");
  const nav = header == null ? void 0 : header.querySelector("nav");
  const root = nav == null ? void 0 : nav.querySelector("[data-dropdown-root]");
  const container = root == null ? void 0 : root.querySelector("[data-dropdown-container]");
  if (!header || !nav || !root || !container) return;
  const triggers = Array.from(nav.querySelectorAll("[data-menu]"));
  const sectionEls = Array.from(container.querySelectorAll("[data-dropdown-section]"));
  if (!triggers.length || !sectionEls.length) return;
  const sections = /* @__PURE__ */ new Map();
  sectionEls.forEach((section) => {
    const name = section.dataset.dropdownSection;
    if (!name) return;
    sections.set(name, { section });
  });
  let activeName = null;
  let activeTrigger = null;
  let activeTween = null;
  let closeTimer = null;
  const gsap2 = globalThis.gsap;
  const getMenuLayout = (trigger, section) => {
    const navRect = nav.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const triggerCenter = triggerRect.left + triggerRect.width / 2 - navRect.left;
    return {
      left: triggerCenter,
      width: section.offsetWidth,
      height: section.offsetHeight
    };
  };
  const setMenu = (name, trigger) => {
    const target = sections.get(name);
    if (!target) return;
    const layout = getMenuLayout(trigger, target.section);
    root.style.left = `${layout.left}px`;
    root.style.width = `${layout.width}px`;
    container.style.width = `${layout.width}px`;
    container.style.height = `${layout.height}px`;
    sections.forEach((entry, key) => {
      const isActive = key === name;
      entry.section.classList.toggle("opacity-100", isActive);
      entry.section.classList.toggle("opacity-0", !isActive);
      entry.section.classList.toggle("pointer-events-auto", isActive);
      entry.section.classList.toggle("pointer-events-none", !isActive);
    });
  };
  const animateMenu = (name, trigger, shouldAnimateItems, wasClosed) => {
    const target = sections.get(name);
    if (!target) return;
    if (!gsap2) {
      setMenu(name, trigger);
      return;
    }
    const layout = getMenuLayout(trigger, target.section);
    const items = target.section.querySelectorAll("a");
    const inactiveSections = sectionEls.filter((section) => section !== target.section);
    if (activeTween) activeTween.kill();
    gsap2.killTweensOf([root, container, target.section, ...inactiveSections, ...items]);
    if (wasClosed) {
      gsap2.set(root, { left: layout.left, width: layout.width, opacity: 0, y: -4 });
      gsap2.set(container, { width: layout.width, height: layout.height });
    }
    if (items.length) {
      gsap2.set(items, { transition: "none", willChange: "transform, opacity" });
    }
    root.classList.remove("opacity-0");
    target.section.classList.remove("opacity-0", "pointer-events-none");
    target.section.classList.add("opacity-100", "pointer-events-auto");
    inactiveSections.forEach((section) => {
      section.classList.remove("opacity-100", "pointer-events-auto");
      section.classList.add("opacity-0", "pointer-events-none");
    });
    activeTween = gsap2.timeline({ defaults: { ease: "power3.out", force3D: true } });
    activeTween.to(
      root,
      { left: layout.left, width: layout.width, opacity: 1, y: 0, duration: MENU_DURATION },
      0
    );
    activeTween.to(
      container,
      { width: layout.width, height: layout.height, duration: MENU_DURATION },
      0
    );
    activeTween.to(inactiveSections, { opacity: 0, duration: 0.12, overwrite: "auto" }, 0);
    activeTween.set(target.section, { opacity: 1 }, 0);
    if (items.length) {
      activeTween.fromTo(
        items,
        { x: 14, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: ITEM_STAGGER,
          ease: "power2.out",
          overwrite: "auto",
          force3D: true,
          onComplete: () => gsap2.set(items, { clearProps: "transition,willChange,transform" })
        },
        0.05
      );
    }
  };
  const openMenu = (trigger) => {
    const name = trigger.dataset.menu;
    if (!sections.has(name)) return;
    if (activeName === name) {
      activeTrigger = trigger;
      return;
    }
    const wasClosed = !activeName;
    activeName = name;
    activeTrigger = trigger;
    root.classList.remove("pointer-events-none", "opacity-0");
    root.classList.add("pointer-events-auto", "opacity-100");
    animateMenu(name, trigger, true, wasClosed);
  };
  const closeMenu = () => {
    if (!activeName) return;
    activeName = null;
    activeTrigger = null;
    if (activeTween) activeTween.kill();
    const finishClose = () => {
      root.classList.remove("pointer-events-auto", "opacity-100");
      root.classList.add("pointer-events-none", "opacity-0");
      sections.forEach((entry) => {
        entry.section.classList.remove("opacity-100", "pointer-events-auto");
        entry.section.classList.add("opacity-0", "pointer-events-none");
      });
    };
    if (!gsap2) {
      finishClose();
      return;
    }
    activeTween = gsap2.to(root, {
      opacity: 0,
      duration: 0.16,
      ease: "power2.out",
      overwrite: "auto",
      onComplete: finishClose
    });
  };
  const stopClose = () => {
    globalThis.clearTimeout(closeTimer);
  };
  const startClose = () => {
    stopClose();
    closeTimer = globalThis.setTimeout(closeMenu, CLOSE_DELAY);
  };
  triggers.forEach((trigger) => {
    const name = trigger.dataset.menu;
    if (!sections.has(name)) return;
    trigger.addEventListener("mouseenter", () => {
      stopClose();
      openMenu(trigger);
    });
    trigger.addEventListener("mouseleave", startClose);
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (activeTrigger === trigger) {
        closeMenu();
      } else {
        openMenu(trigger);
      }
    });
  });
  root.addEventListener("mouseenter", stopClose);
  root.addEventListener("mouseleave", startClose);
  document.addEventListener("click", (event) => {
    if (!activeName || header.contains(event.target)) return;
    closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  globalThis.addEventListener("resize", () => {
    if (!activeName || !activeTrigger) return;
    setMenu(activeName, activeTrigger);
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeaderMenus);
} else {
  initHeaderMenus();
}
const initNavTabs = () => {
  if (typeof gsap === "undefined") return;
  const nav = document.querySelector("[data-nav-tabs]");
  const indicator = nav == null ? void 0 : nav.querySelector("[data-nav-indicator]");
  const items = nav ? [...nav.querySelectorAll("[data-nav-item]")] : [];
  if (!nav || !indicator || !items.length) return;
  const getPageName = (pathname) => pathname.split("/").pop() || "index.html";
  const currentPage = getPageName(window.location.pathname);
  const currentItem = items.find((item) => {
    const link = item.querySelector("a[href]");
    return link && getPageName(new URL(link.href).pathname) === currentPage;
  });
  const defaultItem = currentItem || items.find((item) => item.dataset.active === "true") || items[0];
  const setActiveItem = (activeItem) => {
    items.forEach((item) => {
      item.dataset.active = item === activeItem ? "true" : "false";
    });
  };
  const moveTo = (item, immediate = false) => {
    const { offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height } = item;
    const props = { left, top, width, height };
    if (immediate) gsap.set(indicator, props);
    else gsap.to(indicator, { ...props, duration: 0.45, ease: "power2.out" });
  };
  setActiveItem(defaultItem);
  moveTo(defaultItem, true);
  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      setActiveItem(item);
      moveTo(item);
    });
  });
  nav.addEventListener("mouseleave", () => {
    setActiveItem(defaultItem);
    moveTo(defaultItem);
  });
  window.addEventListener("resize", () => moveTo(defaultItem, true));
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNavTabs);
} else {
  initNavTabs();
}
const headerAnimation = {
  headerOne() {
    const header = document.querySelector(".header-scroll");
    const headerPadding = document.querySelector("[data-header-padding]");
    if (header) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          header.classList.add("scroll-header");
          headerPadding == null ? void 0 : headerPadding.classList.add("decrease-header-padding");
        } else {
          header.classList.remove("scroll-header");
          headerPadding == null ? void 0 : headerPadding.classList.remove("decrease-header-padding");
        }
      });
    }
  }
};
if (globalThis.window !== void 0) {
  headerAnimation.headerOne();
}
const initImpactMagneticCards = () => {
  if (typeof gsap === "undefined") return;
  const cards = gsap.utils.toArray("[data-impact-magnetic]");
  if (!cards.length) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;
  cards.forEach((card) => {
    const strength = Number.parseFloat(card.dataset.magneticStrength) || 0.2;
    card.addEventListener("pointerenter", () => {
      gsap.set(card, { zIndex: 8 });
      gsap.to(card, {
        scale: 1.02,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true
      });
    });
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = gsap.utils.mapRange(
        rect.left,
        rect.right,
        -rect.width / 2,
        rect.width / 2,
        event.clientX
      );
      const y = gsap.utils.mapRange(
        rect.top,
        rect.bottom,
        -rect.height / 2,
        rect.height / 2,
        event.clientY
      );
      gsap.to(card, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power3.out",
        overwrite: true
      });
    });
    card.addEventListener("pointerleave", () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: true,
        onComplete: () => {
          gsap.set(card, { clearProps: "transform,zIndex" });
        }
      });
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initImpactMagneticCards);
} else {
  initImpactMagneticCards();
}
class ModalAnimation {
  constructor() {
    this.modal = null;
    this.content = null;
    this.isOpen = false;
    this.isAnimating = false;
    this.scrollTriggered = false;
    this.config = {
      scrollThreshold: 800,
      storageKey: "joinModalDismissed",
      animation: {
        duration: 300,
        closeDelay: 200
      }
    };
  }
  init() {
    this.bindEvents();
    this.setupScrollTrigger();
  }
  // Event binding
  bindEvents() {
    document.addEventListener("click", (e) => this.handleClick(e));
    document.addEventListener("keydown", (e) => this.handleKeydown(e));
  }
  handleClick(e) {
    var _a;
    const trigger = e.target.closest(".modal-action");
    if (trigger) {
      e.preventDefault();
      this.open(trigger);
      return;
    }
    const closeBtn = e.target.closest(".modal-close-btn, .close-join-modal");
    const overlay = (_a = e.target.classList) == null ? void 0 : _a.contains("modal-overlay");
    if (closeBtn) {
      this.close(true);
    } else if (overlay && e.target === this.modal) {
      this.close(false);
    }
  }
  handleKeydown(e) {
    if (e.key === "Escape" && this.isOpen) {
      this.close(false);
    }
  }
  // Open modal
  open(trigger) {
    if (this.isAnimating) return;
    const overlay = trigger.closest(".modal-overlay") || document.querySelector(".modal-overlay");
    if (!overlay) return;
    if (this.isOpen) {
      this.close(false);
      setTimeout(() => {
        this._openWithVideo(overlay, trigger);
      }, this.config.animation.closeDelay + 50);
      return;
    }
    this._openWithVideo(overlay, trigger);
  }
  _openWithVideo(overlay, trigger) {
    this.modal = overlay;
    this.content = overlay.querySelector(".modal-content");
    const videoUrl = trigger.dataset.videoUrl;
    if (videoUrl) this.loadVideo(videoUrl);
    this.show();
  }
  show() {
    this.isOpen = true;
    this.isAnimating = true;
    document.body.style.overflow = "hidden";
    this.modal.classList.add("modal-open");
    this.modal.classList.remove("modal-close");
    this.modal.removeAttribute("aria-hidden");
    if (this.modal.tagName === "DIALOG") {
      this.modal.showModal();
    }
    this.animate("open");
  }
  // Close modal
  close(persist = false) {
    if (!this.isOpen || this.isAnimating) return;
    this.isAnimating = true;
    this.isOpen = false;
    if (persist) {
      this.savePreference();
    }
    this.animate("close", () => {
      document.body.style.overflow = "auto";
      this.modal.classList.remove("modal-open");
      this.modal.classList.add("modal-close");
      this.modal.setAttribute("aria-hidden", "true");
      if (this.modal.tagName === "DIALOG") {
        this.modal.close();
      }
      this.clearVideo();
      this.isAnimating = false;
    });
  }
  // Animation
  animate(type, callback) {
    if (!this.content) {
      this.isAnimating = false;
      callback == null ? void 0 : callback();
      return;
    }
    if (typeof gsap === "undefined") {
      if (type === "open") {
        this.content.style.outline = "none";
        this.content.setAttribute("tabindex", "-1");
        this.content.focus();
      }
      this.isAnimating = false;
      callback == null ? void 0 : callback();
      return;
    }
    gsap.killTweensOf(this.content);
    if (type === "open") {
      this.content.style.outline = "none";
      this.content.setAttribute("tabindex", "-1");
      gsap.fromTo(
        this.content,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: this.config.animation.duration / 1e3,
          ease: "power3.inOut",
          onComplete: () => {
            this.content.focus();
            this.isAnimating = false;
          }
        }
      );
    } else {
      gsap.to(this.content, {
        opacity: 0,
        y: -50,
        duration: this.config.animation.closeDelay / 1e3,
        ease: "power2.in",
        onComplete: callback
      });
    }
  }
  // Video handling
  loadVideo(url) {
    var _a;
    const iframe = (_a = this.content) == null ? void 0 : _a.querySelector("iframe");
    if (!iframe) return;
    iframe.src = "";
    requestAnimationFrame(() => {
      iframe.src = url;
    });
  }
  clearVideo() {
    var _a;
    const iframe = (_a = this.content) == null ? void 0 : _a.querySelector("iframe");
    if (iframe) iframe.src = "";
  }
  // Scroll trigger
  setupScrollTrigger() {
    const joinModal = Array.from(document.querySelectorAll(".modal-overlay")).find(
      (m) => m.querySelector(".close-join-modal, #join-modal-title")
    );
    if (!joinModal || this.wasModalDismissed()) return;
    const handleScroll = () => {
      if (this.scrollTriggered) return;
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY >= this.config.scrollThreshold) {
        this.scrollTriggered = true;
        this.modal = joinModal;
        this.content = joinModal.querySelector(".modal-content");
        this.show();
        window.removeEventListener("scroll", handleScroll);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (document.readyState !== "loading") {
      handleScroll();
    }
  }
  // Storage
  wasModalDismissed() {
    return localStorage.getItem(this.config.storageKey) === "true";
  }
  savePreference() {
    try {
      localStorage.setItem(this.config.storageKey, "true");
    } catch (e) {
      console.warn("Could not save modal preference");
    }
  }
  // Cleanup
  destroy() {
    if (this.isOpen) this.close(false);
  }
}
if (typeof window !== "undefined") {
  const modal = new ModalAnimation();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => modal.init(), { once: true });
  } else {
    modal.init();
  }
}
const initProcessDragSlider = () => {
  if (typeof gsap === "undefined") return;
  document.querySelectorAll("[data-process-slider]").forEach((slider) => {
    const viewport = slider.querySelector("[data-process-viewport]");
    const track = slider.querySelector("[data-process-track]");
    const rail = slider.querySelector("[data-process-rail]");
    const railProgress = slider.querySelector("[data-process-rail-progress]");
    const controller = slider.querySelector("[data-process-controller]");
    if (!viewport || !track || !rail || !controller) return;
    const cards = gsap.utils.toArray(track.children);
    let progress = 0;
    let startX = 0;
    let startProgress = 0;
    let maxControllerX = 0;
    let maxTrackX = 0;
    const clamp2 = gsap.utils.clamp(0, 1);
    const updateSizes = () => {
      maxControllerX = Math.max(rail.clientWidth - controller.offsetWidth, 0);
      maxTrackX = Math.max(track.scrollWidth - viewport.clientWidth, 0);
    };
    const setProgress = (value, animate = false) => {
      progress = clamp2(value);
      const moveVars = {
        duration: animate ? 0.45 : 0.32,
        ease: "power3.out",
        overwrite: true
      };
      gsap.to(controller, { ...moveVars, x: progress * maxControllerX });
      gsap.to(track, { ...moveVars, x: -progress * maxTrackX });
      gsap.to(cards, {
        ...moveVars,
        x: (index) => progress * index * -12,
        stagger: 0.015
      });
      if (railProgress) {
        gsap.to(railProgress, { ...moveVars, scaleX: progress });
      }
    };
    const onDrag = (event) => {
      if (!controller.hasPointerCapture(event.pointerId)) return;
      const dragged = event.clientX - startX;
      const nextProgress = startProgress + dragged / maxControllerX;
      setProgress(nextProgress);
    };
    const stopDrag = (event) => {
      if (!controller.hasPointerCapture(event.pointerId)) return;
      controller.releasePointerCapture(event.pointerId);
      window.removeEventListener("pointermove", onDrag);
      window.removeEventListener("pointerup", stopDrag);
      window.removeEventListener("pointercancel", stopDrag);
    };
    controller.addEventListener("pointerdown", (event) => {
      updateSizes();
      if (!maxControllerX) return;
      startX = event.clientX;
      startProgress = progress;
      controller.setPointerCapture(event.pointerId);
      window.addEventListener("pointermove", onDrag);
      window.addEventListener("pointerup", stopDrag);
      window.addEventListener("pointercancel", stopDrag);
    });
    rail.addEventListener("pointerdown", (event) => {
      if (event.target === controller || controller.contains(event.target)) return;
      updateSizes();
      if (!maxControllerX) return;
      const railBounds = rail.getBoundingClientRect();
      const controllerCenter = controller.offsetWidth / 2;
      const nextX = event.clientX - railBounds.left - controllerCenter;
      setProgress(nextX / maxControllerX, true);
    });
    window.addEventListener("resize", () => {
      updateSizes();
      setProgress(progress);
    });
    updateSizes();
    setProgress(0);
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initProcessDragSlider);
} else {
  initProcessDragSlider();
}
const animation = {
  init() {
    const elements = document.querySelectorAll("[data-block-reveal]");
    const Springer = window.Springer.default;
    elements.forEach((elem) => {
      const duration = elem.getAttribute("data-duration") ? parseFloat(elem.getAttribute("data-duration")) : 0.6;
      const blur = elem.getAttribute("data-blur") ? parseFloat(elem.getAttribute("data-blur")) : 0;
      const delay = elem.getAttribute("data-delay") ? parseFloat(elem.getAttribute("data-delay")) : 0;
      const offset = elem.getAttribute("data-offset") ? parseFloat(elem.getAttribute("data-offset")) : 60;
      const instant = elem.hasAttribute("data-instant") && elem.getAttribute("data-instant") !== "false";
      const start = elem.getAttribute("data-start") || "top 90%";
      const end = elem.getAttribute("data-end") || "top 50%";
      const direction = elem.getAttribute("data-direction") || "down";
      const useSpring = elem.hasAttribute("data-spring");
      const spring = useSpring ? Springer(0.2, 0.8) : null;
      const rotation = elem.getAttribute("data-rotation") ? parseFloat(elem.getAttribute("data-rotation")) : 0;
      const scale = elem.getAttribute("data-scale") ? parseFloat(elem.getAttribute("data-scale")) : 1;
      const animationType = elem.getAttribute("data-animation-type") || "from";
      elem.style.opacity = "1";
      elem.style.filter = `blur(${blur}px)`;
      let animationProps;
      if (animationType === "to") {
        animationProps = {
          opacity: 1,
          filter: "blur(0)",
          duration,
          delay,
          ease: useSpring ? spring : "power2.out",
          scale
        };
        if (rotation !== 0) {
          animationProps.rotation = rotation;
        }
      } else {
        animationProps = {
          opacity: 0,
          filter: "blur(16px)",
          duration,
          delay,
          ease: useSpring ? spring : "power2.out"
        };
        if (rotation !== 0) {
          animationProps.rotation = rotation;
        }
      }
      if (!instant) {
        animationProps.scrollTrigger = {
          trigger: elem,
          start,
          end,
          scrub: false
        };
      }
      switch (direction) {
        case "left":
          animationProps.x = -offset;
          break;
        case "right":
          animationProps.x = offset;
          break;
        case "down":
          animationProps.y = offset;
          break;
        case "up":
        default:
          animationProps.y = -offset;
          break;
      }
      if (animationType === "to") {
        gsap.to(elem, animationProps);
      } else {
        gsap.from(elem, animationProps);
      }
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  animation.init();
});
globalThis.revealAnimation = animation;
const initServicesCardsAlign = () => {
  if (typeof gsap === "undefined") return;
  const cards = gsap.utils.toArray("[data-services-list]");
  const tabs = document.querySelector("[data-services-tabs]");
  const indicator = tabs == null ? void 0 : tabs.querySelector("[data-services-indicator]");
  const title = document.querySelector("[data-services-list-title]");
  const description = document.querySelector("[data-services-list-description]");
  const button = document.querySelector("[data-services-list-button]");
  const imageWrap = document.querySelector("[data-services-list-image]");
  const image = imageWrap == null ? void 0 : imageWrap.querySelector("img");
  const imageCover = imageWrap == null ? void 0 : imageWrap.querySelector("[data-services-image-cover]");
  if (!cards.length || !title || !description || !image || !imageCover) return;
  const copyTargets = [title, description, button].filter(Boolean);
  let activeIndex = 0;
  let activeTween;
  const moveIndicator = (card, immediate = false) => {
    if (!indicator) return;
    const { offsetLeft: left, offsetTop: top, offsetWidth: width, offsetHeight: height } = card;
    const props = { left, top, width, height };
    if (immediate) gsap.set(indicator, props);
    else gsap.to(indicator, { ...props, duration: 0.45, ease: "expo.inOut", overwrite: true });
  };
  const setVisualCard = (selectedCard) => {
    cards.forEach((card) => {
      const isActive = card === selectedCard;
      const cardTitle = card.querySelector(".text-tagline-1");
      card.setAttribute("aria-pressed", String(isActive));
      cardTitle == null ? void 0 : cardTitle.classList.toggle("text-black", isActive);
      cardTitle == null ? void 0 : cardTitle.classList.toggle("text-background-4/60", !isActive);
    });
  };
  const revealCopy = (card) => {
    gsap.set([title, description], { autoAlpha: 1, y: 0 });
    if (typeof globalThis.revealText === "function") {
      globalThis.revealText(title, card.dataset.title);
      globalThis.revealText(description, card.dataset.description);
      return;
    }
    title.textContent = card.dataset.title;
    description.textContent = card.dataset.description;
    gsap.fromTo(
      [title, description],
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
  };
  setVisualCard(cards[activeIndex]);
  moveIndicator(cards[activeIndex], true);
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index === activeIndex) return;
      activeIndex = index;
      activeTween == null ? void 0 : activeTween.kill();
      gsap.killTweensOf([...copyTargets, image, imageCover]);
      setVisualCard(card);
      moveIndicator(card);
      activeTween = gsap.timeline({ defaults: { ease: "power2.out" } });
      activeTween.to(copyTargets, {
        autoAlpha: 0,
        y: 16,
        duration: 0.2,
        stagger: 0.03,
        ease: "power2.in"
      }).to(
        imageCover,
        {
          scaleY: 1,
          transformOrigin: "bottom center",
          duration: 0.35,
          ease: "power2.inOut"
        },
        0
      ).add(() => {
        image.src = card.dataset.image;
        image.alt = card.dataset.alt || card.dataset.title;
        revealCopy(card);
      }).set(image, { autoAlpha: 1, scale: 1.12 }).set(imageCover, { transformOrigin: "top center" }).to(imageCover, { scaleY: 0, duration: 0.4 }, "reveal").to(image, { scale: 1, duration: 0.7 }, "reveal");
      if (button) {
        activeTween.fromTo(
          button,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.45 },
          "reveal+=0.1"
        );
      }
    });
  });
  window.addEventListener("resize", () => moveIndicator(cards[activeIndex], true));
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initServicesCardsAlign);
} else {
  initServicesCardsAlign();
}
const stackCardAnimation = {
  init() {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const cardWrappers = gsap.utils.toArray("[data-stack-card-wrapper]");
    if (cardWrappers.length === 0) return;
    cardWrappers.forEach((wrapper) => {
      const cardItems = wrapper.querySelectorAll("[data-stack-card-item]");
      if (cardItems.length === 0) return;
      const markers = wrapper.dataset.stackCardMarkers || false;
      const stackStyle = wrapper.dataset.stackStyle || "scale";
      const scaleValue = Number.parseFloat(wrapper.dataset.scaleValue) || 0.9;
      cardItems.forEach((item, i) => {
        let animationProps = {};
        if (stackStyle === "rotate") {
          let rotation = 0;
          if (i % 2 === 1) {
            rotation = Math.floor(i / 2) % 2 === 0 ? 4 : -4;
          }
          animationProps = {
            rotation,
            transformOrigin: "top center"
          };
        } else {
          let scale = 1;
          if (i !== cardItems.length - 1) {
            scale = scaleValue + 0.025 * i;
          }
          animationProps = {
            scale,
            transformOrigin: "top center"
          };
        }
        gsap.to(item, {
          ...animationProps,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top " + (120 + 10 * i),
            end: "bottom 850",
            endTrigger: wrapper,
            scrub: 1,
            pin: item,
            pinSpacing: false,
            invalidateOnRefresh: true,
            markers: markers ? {
              indent: 100 * i,
              startColor: "#0ae448",
              endColor: "#fec5fb",
              fontSize: "14px"
            } : false,
            id: `stack-card-${i + 1}`
          }
        });
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  stackCardAnimation.init();
});
const initTextColorRevealOnScroll = () => {
  if (typeof gsap === "undefined" || typeof SplitText === "undefined" || typeof ScrollTrigger === "undefined") {
    return;
  }
  gsap.registerPlugin(SplitText, ScrollTrigger);
  const elements = document.querySelectorAll("[data-text-color-reveal]");
  if (!elements.length) return;
  const initElement = (el) => {
    var _a, _b;
    const section = el.closest("[data-text-color-reveal-pin]");
    if (!section) return;
    (_b = (_a = el._splitText) == null ? void 0 : _a.revert) == null ? void 0 : _b.call(_a);
    const split = SplitText.create(el, {
      type: "chars",
      charsClass: "text-color-reveal-char"
    });
    el._splitText = split;
    gsap.set(split.words, { color: "rgba(255, 255, 255, 0.6)" });
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "+=100%",
        scrub: true
      }
    }).to(split.chars, {
      color: "#ffffff",
      duration: 3,
      ease: "expo.out",
      stagger: Number.parseFloat(el.dataset.stagger) || 0.95
    });
  };
  document.fonts.ready.then(() => {
    elements.forEach(initElement);
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTextColorRevealOnScroll);
} else {
  initTextColorRevealOnScroll();
}
function canReveal() {
  return typeof gsap !== "undefined" && typeof SplitText !== "undefined";
}
function getRevealDelay(el) {
  const parsed = Number.parseFloat(el.dataset.revealDelay);
  return Number.isNaN(parsed) ? 0.1 : parsed;
}
function cleanupReveal(el) {
  var _a, _b;
  if (!canReveal()) return;
  (_b = (_a = el._splitText) == null ? void 0 : _a.revert) == null ? void 0 : _b.call(_a);
  delete el._splitText;
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.getAll().filter((st) => st.trigger === el).forEach((st) => st.kill());
  }
  gsap.killTweensOf(el.querySelectorAll(".text-reveal-line"));
}
function revealElement(el, { text, instant } = {}) {
  var _a;
  if (!canReveal()) {
    if (text !== void 0) el.textContent = text;
    (_a = gsap == null ? void 0 : gsap.set) == null ? void 0 : _a.call(gsap, el, { opacity: 1 });
    return;
  }
  cleanupReveal(el);
  if (text !== void 0) el.textContent = text;
  el._splitText = SplitText.create(el, {
    type: "lines",
    mask: "lines",
    linesClass: "text-reveal-line"
  });
  gsap.set(el, { opacity: 1 });
  const tweenVars = {
    yPercent: 0,
    rotation: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "custom-ease",
    delay: getRevealDelay(el)
  };
  if (typeof ScrollTrigger !== "undefined" && instant !== true && !(instant === void 0 && el.dataset.instant !== void 0 && el.dataset.instant !== "false")) {
    tweenVars.scrollTrigger = {
      trigger: el,
      start: el.dataset.start || "top 90%",
      end: el.dataset.end || "top 50%",
      scrub: false
    };
  }
  gsap.fromTo(
    el._splitText.lines,
    { yPercent: 110, rotation: 8, transformOrigin: "left bottom" },
    tweenVars
  );
}
function revealText(el, text) {
  revealElement(el, { text, instant: true });
}
function hideReveal(el) {
  var _a, _b;
  if (!canReveal()) {
    cleanupReveal(el);
    return;
  }
  if (!((_b = (_a = el._splitText) == null ? void 0 : _a.lines) == null ? void 0 : _b.length)) {
    cleanupReveal(el);
    return;
  }
  gsap.killTweensOf(el._splitText.lines);
  gsap.to(el._splitText.lines, {
    yPercent: 110,
    duration: 0.35,
    rotation: 8,
    transformOrigin: "left bottom",
    ease: "custom-ease",
    stagger: 0.03,
    onComplete: () => cleanupReveal(el)
  });
}
function initTextReveal() {
  if (!canReveal()) return;
  if (typeof CustomEase === "undefined") {
    gsap.registerPlugin(SplitText);
  } else {
    gsap.registerPlugin(SplitText, CustomEase);
    CustomEase.create("custom-ease", "0.625, 0.05, 0, 1");
  }
  if (typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  document.fonts.ready.then(() => {
    document.querySelectorAll("[data-text-reveal]").forEach((el) => {
      if (el.closest("[data-process-item]")) return;
      if (el.closest(".accordion-content")) return;
      revealElement(el);
    });
  });
}
globalThis.revealText = revealText;
globalThis.revealElement = revealElement;
globalThis.cleanupReveal = cleanupReveal;
globalThis.hideReveal = hideReveal;
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTextReveal);
} else {
  initTextReveal();
}
function getRevealTexts(accordionContent) {
  return accordionContent.querySelectorAll("[data-text-reveal]");
}
function cleanupAccordionReveal(accordionContent) {
  getRevealTexts(accordionContent).forEach((el) => {
    var _a;
    (_a = globalThis.cleanupReveal) == null ? void 0 : _a.call(globalThis, el);
  });
}
function revealAccordionContent(accordionContent) {
  getRevealTexts(accordionContent).forEach((el) => {
    var _a;
    if (!el.textContent.trim()) return;
    (_a = globalThis.revealElement) == null ? void 0 : _a.call(globalThis, el, { instant: true });
  });
}
function hideAccordionContent(accordionContent) {
  getRevealTexts(accordionContent).forEach((el) => {
    var _a;
    (_a = globalThis.hideReveal) == null ? void 0 : _a.call(globalThis, el);
  });
}
function forceReflow(el) {
  return el.offsetHeight;
}
function syncIconState(btn, state) {
  const icon = btn.querySelector(".accordion-icon");
  if (icon) icon.dataset.state = state;
}
function setExpandedState(item, btn, accordionContent, state) {
  const isOpen = state === "open";
  item.dataset.state = state;
  btn.dataset.state = state;
  accordionContent.dataset.state = state;
  getRevealTexts(accordionContent).forEach((el) => {
    el.dataset.state = state;
  });
  syncIconState(btn, state);
  btn.setAttribute("aria-expanded", String(isOpen));
  accordionContent.setAttribute("aria-hidden", String(!isOpen));
}
function openItem(item, btn, accordionContent, animate) {
  setExpandedState(item, btn, accordionContent, "open");
  if (!animate) {
    accordionContent.style.height = "auto";
    accordionContent.style.opacity = "1";
    revealAccordionContent(accordionContent);
    return;
  }
  cleanupAccordionReveal(accordionContent);
  accordionContent.style.height = "auto";
  accordionContent.style.opacity = "0";
  const target = accordionContent.scrollHeight;
  accordionContent.style.height = "0px";
  forceReflow(accordionContent);
  requestAnimationFrame(() => {
    accordionContent.style.height = `${target}px`;
    accordionContent.style.opacity = "1";
    requestAnimationFrame(() => {
      revealAccordionContent(accordionContent);
    });
  });
  accordionContent.addEventListener(
    "transitionend",
    (e) => {
      if (e.propertyName === "height") {
        accordionContent.style.height = "auto";
      }
    },
    { once: true }
  );
}
function closeItem(item, btn, accordionContent, animate) {
  setExpandedState(item, btn, accordionContent, "closed");
  if (!animate) {
    accordionContent.style.height = "0px";
    accordionContent.style.opacity = "0";
    cleanupAccordionReveal(accordionContent);
    return;
  }
  hideAccordionContent(accordionContent);
  const current = accordionContent.scrollHeight;
  accordionContent.style.height = `${current}px`;
  accordionContent.style.opacity = "1";
  forceReflow(accordionContent);
  setTimeout(() => {
    requestAnimationFrame(() => {
      accordionContent.style.height = "0px";
      accordionContent.style.opacity = "0";
    });
  }, 80);
  accordionContent.addEventListener(
    "transitionend",
    (e) => {
      if (e.propertyName === "height") {
        cleanupAccordionReveal(accordionContent);
      }
    },
    { once: true }
  );
}
function getAccordionParts(item) {
  return {
    btn: item.querySelector(".accordion-action"),
    accordionContent: item.querySelector(".accordion-content")
  };
}
function setupItemA11y(accordionAction, accordionContent, qId, aId) {
  accordionAction.id || (accordionAction.id = qId);
  accordionContent.id || (accordionContent.id = aId);
  accordionAction.setAttribute("aria-controls", accordionContent.id);
  accordionContent.setAttribute("role", "region");
  accordionContent.setAttribute("aria-labelledby", accordionAction.id);
}
function setupContentAnimationStyle(accordionContent) {
  accordionContent.style.overflow = "hidden";
  accordionContent.style.transition = "height 300ms ease-in-out, opacity 300ms ease-in-out";
}
function initializeItem(item, accIndex, itemIndex) {
  const { btn: accordionAction, accordionContent } = getAccordionParts(item);
  if (!accordionAction || !accordionContent) return;
  const qId = `acc-q-${accIndex}-${itemIndex}`;
  const aId = `acc-a-${accIndex}-${itemIndex}`;
  setupItemA11y(accordionAction, accordionContent, qId, aId);
  setupContentAnimationStyle(accordionContent);
  const shouldOpen = item.dataset.defaultOpen === "true";
  if (shouldOpen) openItem(item, accordionAction, accordionContent, false);
  else closeItem(item, accordionAction, accordionContent, false);
}
function enforceSingleDefaultOpen(items) {
  const openDefaults = items.filter((it) => it.dataset.defaultOpen === "true");
  openDefaults.slice(1).forEach((it) => {
    const { btn, accordionContent } = getAccordionParts(it);
    if (btn && accordionContent) closeItem(it, btn, accordionContent, false);
    delete it.dataset.defaultOpen;
  });
}
function closeOtherItems(items, activeItem) {
  items.forEach((it) => {
    if (it === activeItem || it.dataset.state !== "open") return;
    const { btn: siblingBtn, accordionContent: siblingContent } = getAccordionParts(it);
    if (siblingBtn && siblingContent) closeItem(it, siblingBtn, siblingContent, true);
  });
}
function handleAccordionClick(e, accordion, items, allowMultiple) {
  const btn = e.target.closest(".accordion-action");
  if (!btn || !accordion.contains(btn)) return;
  e.preventDefault();
  const item = btn.closest(".accordion-item");
  if (!item) return;
  const accordionContent = item.querySelector(".accordion-content");
  if (!accordionContent) return;
  const isOpen = item.dataset.state === "open";
  if (isOpen) {
    closeItem(item, btn, accordionContent, true);
    return;
  }
  if (!allowMultiple) closeOtherItems(items, item);
  openItem(item, btn, accordionContent, true);
}
function handleAccordionKeydown(e) {
  const btn = e.target.closest(".accordion-action");
  if (!btn) return;
  if (e.key !== "Enter" && e.key !== " ") return;
  e.preventDefault();
  btn.click();
}
function initAccordions({ selector = ".accordion", allowMultiple = false, keyboard = true } = {}) {
  const accordions = document.querySelectorAll(selector);
  accordions.forEach((accordion, accIndex) => {
    const items = Array.from(accordion.querySelectorAll(".accordion-item"));
    if (!accordion.getAttribute("aria-label")) {
      accordion.setAttribute("aria-label", "Accordion");
    }
    items.forEach((item, i) => initializeItem(item, accIndex, i));
    if (!allowMultiple) enforceSingleDefaultOpen(items);
    accordion.addEventListener(
      "click",
      (e) => handleAccordionClick(e, accordion, items, allowMultiple)
    );
    if (keyboard) accordion.addEventListener("keydown", handleAccordionKeydown);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  initAccordions({
    allowMultiple: false,
    keyboard: true
  });
});
document.addEventListener("DOMContentLoaded", function() {
  if (typeof InfiniteMarquee === "undefined") {
    console.error("InfiniteMarquee is not loaded.");
    return;
  }
  const animation2 = {
    infiniteLeft() {
      if (document.querySelector(".logos-marquee-container")) {
        new InfiniteMarquee({
          element: ".logos-marquee-container",
          speed: 55e3,
          smoothEdges: true,
          direction: "left",
          gap: "32px",
          duplicateCount: 1,
          mobileSettings: {
            direction: "top",
            speed: 5e4
          },
          on: {
            beforeInit: () => console.log("Not Yet Initialized"),
            afterInit: () => console.log("Initialized")
          }
        });
      }
    },
    infiniteRight() {
      if (document.querySelector(".logos-right-marquee-container")) {
        new InfiniteMarquee({
          element: ".logos-right-marquee-container",
          speed: 55e3,
          smoothEdges: true,
          direction: "right",
          gap: "32px",
          duplicateCount: 1,
          mobileSettings: {
            direction: "right",
            speed: 5e4
          },
          on: {
            beforeInit: () => console.log("Not Yet Initialized"),
            afterInit: () => console.log("Initialized")
          }
        });
      }
    },
    initHover() {
      if (document.querySelector(".cards-marquee-container")) {
        new InfiniteMarquee({
          element: ".cards-marquee-container",
          speed: 14e4,
          smoothEdges: true,
          direction: "left",
          gap: "32px",
          pauseOnHover: true,
          on: {
            beforeInit: () => console.log("Not Yet Initialized"),
            afterInit: () => console.log("Initialized")
          }
        });
      }
    },
    initHoverRight() {
      if (document.querySelector(".cards-right-marquee-container")) {
        new InfiniteMarquee({
          element: ".cards-right-marquee-container",
          speed: 14e4,
          smoothEdges: true,
          direction: "right",
          gap: "32px",
          pauseOnHover: true,
          on: {
            beforeInit: () => console.log("Not Yet Initialized"),
            afterInit: () => console.log("Initialized")
          }
        });
      }
    },
    infiniteTop() {
      if (document.querySelector(".top-marquee-container")) {
        new InfiniteMarquee({
          element: ".top-marquee-container",
          speed: 4e4,
          smoothEdges: true,
          direction: "top",
          gap: "32px",
          pauseOnHover: true,
          duplicateCount: 0,
          mobileSettings: {
            direction: "top",
            speed: 5e4
          },
          on: {
            beforeInit: () => {
            },
            afterInit: () => {
            }
          }
        });
      }
    },
    infiniteBottom() {
      if (document.querySelector(".bottom-marquee-container")) {
        new InfiniteMarquee({
          element: ".bottom-marquee-container",
          speed: 4e4,
          smoothEdges: true,
          direction: "bottom",
          pauseOnHover: true,
          gap: "32px",
          duplicateCount: 0,
          mobileSettings: {
            direction: "bottom",
            speed: 5e4
          },
          on: {
            beforeInit: () => {
            },
            afterInit: () => {
            }
          }
        });
      }
    }
  };
  animation2.infiniteLeft();
  animation2.infiniteRight();
  animation2.initHover();
  animation2.initHoverRight();
  animation2.infiniteTop();
  animation2.infiniteBottom();
});
const progressiveBlurEffect = {
  init() {
    const blurElements = document.querySelectorAll("[data-progressive-blur-effect]");
    blurElements.forEach((element) => {
      const intensity = element.dataset.intensity ? Number.parseFloat(element.dataset.intensity) : 50;
      const position = element.dataset.position ? element.dataset.position : "top";
      const className = element.dataset.class ? element.dataset.class : "";
      const intensityFactor = intensity / 50;
      const blurLayers = [
        { blur: `${1 * intensityFactor}px`, maskStart: 0, maskEnd: 25, zIndex: 1 },
        { blur: `${3 * intensityFactor}px`, maskStart: 25, maskEnd: 75, zIndex: 2 },
        { blur: `${6 * intensityFactor}px`, maskStart: 75, maskEnd: 100, zIndex: 3 }
      ];
      const positionStyles = {
        bottom: { bottom: "0", left: "0", right: "0", top: "auto" },
        top: { top: "0", left: "0", right: "0", bottom: "auto" },
        left: { left: "0", top: "0", bottom: "0", right: "auto" },
        right: { right: "0", top: "0", bottom: "0", left: "auto" }
      };
      const gradientDirection = {
        bottom: "to bottom",
        top: "to top",
        left: "to left",
        right: "to right"
      };
      Object.assign(
        element.style,
        {
          position: "absolute",
          zIndex: "10",
          pointerEvents: "auto"
        },
        positionStyles[position]
      );
      if (className) {
        className.split(" ").forEach((cls) => {
          if (cls.trim()) {
            element.classList.add(cls.trim());
          }
        });
      }
      blurLayers.forEach((layer, index) => {
        const layerElement = document.createElement("div");
        const maskImage = `linear-gradient(${gradientDirection[position]}, transparent ${layer.maskStart}%, black ${layer.maskEnd}%)`;
        Object.assign(layerElement.style, {
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          pointerEvents: "none",
          zIndex: String(layer.zIndex),
          backdropFilter: `blur(${layer.blur})`,
          WebkitBackdropFilter: `blur(${layer.blur})`,
          maskImage,
          WebkitMaskImage: maskImage
        });
        element.appendChild(layerElement);
      });
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  progressiveBlurEffect.init();
});
let lenis;
const smoothScrolling = () => {
  if (lenis || typeof Lenis === "undefined" || typeof gsap === "undefined") return;
  lenis = new Lenis({
    lerp: 0.08,
    smoothWheel: true,
    syncTouch: true,
    touchMultiplier: 1.1
  });
  lenis.on("scroll", () => {
    if (typeof ScrollTrigger !== "undefined") ScrollTrigger.update();
  });
  gsap.ticker.add((time) => {
    lenis.raf(time * 1e3);
  });
  gsap.ticker.lagSmoothing(0);
};
const resetTocItems = (sidebarList) => {
  const allListItems = sidebarList.querySelectorAll("li");
  allListItems.forEach((item) => {
    const icon = item.querySelector("span:last-child");
    const text = item.querySelector("span:first-child, a span");
    if (icon) icon.classList.add("invisible");
    if (text) {
      text.classList.remove("font-medium", "text-white");
      text.classList.add("font-normal", "text-white/60");
    }
  });
};
const activateTocItem = (item) => {
  const icon = item.querySelector("span:last-child");
  const text = item.querySelector("span:first-child, a span");
  if (icon) icon.classList.remove("invisible");
  if (text) {
    text.classList.remove("font-normal", "text-white/60");
    text.classList.add("font-medium", "text-white");
  }
};
const handleTocItemClick = (clickedItem, sidebarList) => {
  resetTocItems(sidebarList);
  activateTocItem(clickedItem);
};
const lenisSmoothScrollLinks = () => {
  const lenisTargetElements = document.querySelectorAll(".lenis-scroll-to");
  const sidebarList = document.querySelector(".table-of-contents .table-of-list");
  lenisTargetElements.forEach((ele) => {
    if (ele.dataset.lenisScrollBound === "true") return;
    ele.dataset.lenisScrollBound = "true";
    ele.addEventListener("click", function(e) {
      e.preventDefault();
      const target = ele.getAttribute("href");
      if (sidebarList) {
        const clickedItem = ele.closest("li");
        if (clickedItem) {
          handleTocItemClick(clickedItem, sidebarList);
        }
      }
      if (target) {
        if (lenis) {
          lenis.scrollTo(target, {
            offset: -100,
            duration: 1.7,
            easing: (t) => 1 - Math.pow(1 - t, 3)
          });
        } else {
          const targetElement = document.querySelector(target);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
            setTimeout(() => {
              window.scrollBy(0, -100);
            }, 100);
          }
        }
      }
    });
  });
};
const handleTocListClicks = () => {
  const sidebarList = document.querySelector(".table-of-contents .table-of-list");
  if (!sidebarList) return;
  const listItems = sidebarList.querySelectorAll("li");
  listItems.forEach((item) => {
    if (item.querySelector(".lenis-scroll-to")) {
      return;
    }
    item.addEventListener("click", function() {
      handleTocItemClick(item, sidebarList);
    });
  });
};
const initSmoothScrolling = () => {
  smoothScrolling();
  lenisSmoothScrollLinks();
  handleTocListClicks();
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSmoothScrolling, { once: true });
} else {
  initSmoothScrolling();
}
const swiperAnimation = {
  instances: {},
  init() {
    if (typeof Swiper === "undefined") {
      return;
    }
    this.instances.scienceLabTestimonial = new Swiper(".science-lab-testimonial-swiper", {
      initialSlide: 3,
      centeredSlides: true,
      spaceBetween: 0,
      loop: true,
      speed: 1400,
      allowTouchMove: true,
      autoplay: {
        delay: 2e3,
        disableOnInteraction: true
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        980: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1140: {
          slidesPerView: 3
          // spaceBetween: 280,
        }
      },
      navigation: {
        nextEl: ".science-lab-testimonial-next",
        prevEl: ".science-lab-testimonial-prev"
      },
      on: {
        init: function() {
          const activeSlide = this.slides[this.activeIndex];
          if (activeSlide) {
            activeSlide.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            activeSlide.style.transform = "scale(1)";
            activeSlide.style.opacity = "1";
            activeSlide.style.filter = "blur(0)";
          }
        },
        slideChange: function() {
          const slides = this.slides;
          slides.forEach((slide) => {
            slide.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            slide.style.transform = "scale(0.8)";
          });
        },
        slideChangeTransitionStart: function() {
          const activeSlide = this.slides[this.activeIndex];
          if (activeSlide) {
            activeSlide.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
            activeSlide.style.transform = "scale(1)";
          }
        }
      }
    });
  }
};
document.addEventListener("DOMContentLoaded", () => {
  swiperAnimation.init();
});

window.initAllThemeAnimations = function() {
  try {
    initSmoothScrolling();
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
    if (typeof avatar !== "undefined" && typeof avatar.init === "function") avatar.init();
    if (typeof borderExpand !== "undefined" && typeof borderExpand.init === "function") borderExpand.init();
    if (typeof initCircleText === "function") initCircleText();
    if (typeof initCounterNumberOnScroll === "function") initCounterNumberOnScroll();
    if (typeof initFooterTitleSweep === "function") initFooterTitleSweep();
    if (typeof initImpactMagneticCards === "function") initImpactMagneticCards();
    if (typeof initProcessDragSlider === "function") initProcessDragSlider();
    if (typeof animation !== "undefined" && typeof animation.init === "function") animation.init();
    if (typeof initServicesCardsAlign === "function") initServicesCardsAlign();
    if (typeof stackCardAnimation !== "undefined" && typeof stackCardAnimation.init === "function") stackCardAnimation.init();
    if (typeof initTextColorRevealOnScroll === "function") initTextColorRevealOnScroll();
    if (typeof initTextReveal === "function") initTextReveal();
    if (typeof swiperAnimation !== "undefined" && typeof swiperAnimation.init === "function") swiperAnimation.init();
    if (typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  } catch (err) {
    console.warn("Theme animation init error:", err);
  }
};

