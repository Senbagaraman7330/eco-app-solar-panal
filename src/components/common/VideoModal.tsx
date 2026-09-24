import React, { useEffect } from 'react';
import { useModal } from '../../context/ModalContext';

export const VideoModal: React.FC = () => {
  const { isOpen, videoUrl, closeModal } = useModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center bg-black/95 transition-opacity duration-300"
      onClick={closeModal}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative h-full max-h-[30%] w-full max-w-[80%] rounded-[10px] max-[400px]:max-h-[20%] max-[400px]:max-w-[90%] max-[400px]:rounded-2xl sm:max-h-[400px] md:max-h-[450px] xl:max-h-[600px] xl:max-w-[1000px]"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="h-full w-full rounded-[10px] max-[400px]:rounded-lg"
          src={videoUrl}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <button
          onClick={closeModal}
          aria-label="Close modal"
          className="modal-close-btn absolute -top-8 -right-8 flex size-8 cursor-pointer items-center justify-center rounded-full bg-white p-1 text-black transition-transform duration-300 hover:rotate-180 max-[400px]:-top-4 max-[400px]:-right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default VideoModal;
