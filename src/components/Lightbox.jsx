export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index == null) return null;
  const src = images[index];

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute right-5 top-5 text-3xl text-cream/80 hover:text-gold"
        aria-label="Close"
        onClick={onClose}
      >
        ×
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 px-3 text-4xl text-cream/70 hover:text-gold md:left-8"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-3 text-4xl text-cream/70 hover:text-gold md:right-8"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            ›
          </button>
        </>
      )}
      <img
        src={src}
        alt=""
        className="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <p className="absolute bottom-5 text-xs tracking-[0.25em] text-cream/60">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
