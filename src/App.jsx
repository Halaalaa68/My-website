import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Lightbox from "./components/Lightbox";
import {
  brands,
  events,
  HALA_PHOTO,
  LINKS,
  packages,
  plannerImages,
  weddingAlbums,
} from "./data";

const allWeddingImages = weddingAlbums.flatMap((album) => album.images);

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.3A4.7 4.7 0 1 1 7.3 12 4.7 4.7 0 0 1 12 7.3zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M14.2 3h2.4a6.4 6.4 0 0 0 4.4 4.2v2.5a8.6 8.6 0 0 1-4.3-1.2v7.3A6.8 6.8 0 1 1 9.2 9.2c.3 0 .6 0 .9.1v2.6a4.2 4.2 0 1 0 3.1 4V3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.7 15l-1 3.8 3.9-1A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 6.8 12.2l.2.3-.6 2.2-2.2-.6-.3.2A8 8 0 1 1 12 4zm4.4 10.3c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.5.1l-.8 1c-.1.1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4 0-.5.1-.7l.5-.6c.1-.1.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2 5.2 5.2 0 0 0 1.1 2.8 8.4 8.4 0 0 0 3.6 3.1 4.2 4.2 0 0 0 2.5.5 2.5 2.5 0 0 0 1.7-1.1 2 2 0 0 0 .1-1.1c0-.2-.2-.2-.4-.3z" />
    </svg>
  );
}

export default function App() {
  const [lightbox, setLightbox] = useState({ images: [], index: null });
  const [albumId, setAlbumId] = useState("all");
  const [eventId, setEventId] = useState(events[0].id);

  const visibleWeddingImages = useMemo(() => {
    if (albumId === "all") return allWeddingImages;
    return weddingAlbums.find((album) => album.id === albumId)?.images ?? [];
  }, [albumId]);

  const activeEvent = events.find((item) => item.id === eventId) ?? events[0];

  const open = (images, index) => setLightbox({ images, index });
  const close = () => setLightbox({ images: [], index: null });
  const prev = () =>
    setLightbox((s) => ({
      ...s,
      index: (s.index - 1 + s.images.length) % s.images.length,
    }));
  const next = () =>
    setLightbox((s) => ({ ...s, index: (s.index + 1) % s.images.length }));

  useEffect(() => {
    if (lightbox.index == null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox.index]);

  return (
    <div id="top" className="bg-ink text-cream">
      <Navbar />

      <section className="grain relative min-h-screen">
        <img
          src="/images/root/img-7487.jpg"
          alt="Bride and groom celebrating"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <p className="text-[11px] tracking-[0.45em] text-gold uppercase">
            Wedding media coverage
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Hala captures the day as it unfolds.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/80 md:text-lg">
            Mobile photography since 2020. Wedding coverage since 2024 — from
            the bride’s preparation to the last dance. Photos, videos, reels,
            and TikToks.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#weddings"
              className="inline-flex justify-center bg-gold px-6 py-3 text-center text-[11px] tracking-[0.22em] text-ink uppercase sm:px-7"
            >
              View weddings
            </a>
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center border border-cream/40 px-6 py-3 text-center text-[11px] tracking-[0.22em] uppercase sm:px-7"
            >
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-cream/10 bg-ink-soft">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {[
            ["2020", "Shooting on mobile"],
            ["2024", "Wedding coverage"],
            ["Prep → last dance", "The full story"],
            ["Team + Osmo Pocket 4", "Photo, video, reels"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="font-serif text-3xl text-gold">{k}</p>
              <p className="mt-1 text-sm text-cream/70">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-8">
        <div className="relative">
          <img
            src={HALA_PHOTO}
            alt="Hala, Photographala"
            className="w-full object-cover object-top md:h-[640px]"
          />
          <p className="absolute bottom-4 left-4 bg-ink/70 px-4 py-2 text-[11px] tracking-[0.3em] uppercase">
            Hala · Photographala
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.35em] text-gold uppercase">About</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            I stay with the bride until the story is complete.
          </h2>
          <p className="mt-6 leading-relaxed text-cream/75">
            I’m Hala. I started as a mobile photographer in 2020, and since 2024
            I’ve been covering weddings — two years of following the day from
            the first makeup brush to the last song.
          </p>
          <p className="mt-4 leading-relaxed text-cream/75">
            I work with the bride through preparation, the ceremony, and the
            party. I take photos, videos, reels, and TikToks so the day lives
            on the phone as much as it does in the album. I also shoot for
            wedding planners, capturing the tables, florals, and rooms they
            designed.
          </p>
          <p className="mt-4 leading-relaxed text-cream/75">
            Beyond weddings I cover events like Garnier, blogger weddings such
            as Black Barbie, and brand sessions for Cookie Zoe, OJA, Nuvola,
            and more.
          </p>
          <p className="mt-4 leading-relaxed text-cream/75">
            I work with a team. They all shoot on iPhone. I shoot on iPhone and
            DJI Osmo Pocket 4 — light, close, and always moving with the moment.
          </p>
        </div>
      </section>

      <section id="weddings" className="bg-[#100e0c] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.35em] text-gold uppercase">
            The heart of the work
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl">Weddings</h2>
          <p className="mt-4 max-w-2xl text-cream/70">
            Hourly coverage, built around your day. I stay from preparation
            until the end — or for the hours you choose.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {weddingAlbums
              .filter((album) =>
                ["full-day", "black-barbie", "celebrities"].includes(album.id)
              )
              .map((album) => (
              <button
                key={album.id}
                type="button"
                onClick={() => {
                  setAlbumId(album.id);
                  open(album.images, 0);
                }}
                className="group relative min-h-[340px] overflow-hidden text-left"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] tracking-[0.3em] text-gold uppercase">
                    {album.tag}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{album.title}</h3>
                  <p className="mt-2 text-sm text-cream/75">{album.blurb}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-12 flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <FilterChip active={albumId === "all"} onClick={() => setAlbumId("all")}>
              All weddings
            </FilterChip>
            {weddingAlbums.map((album) => (
              <FilterChip
                key={album.id}
                active={albumId === album.id}
                onClick={() => setAlbumId(album.id)}
              >
                {album.title}
              </FilterChip>
            ))}
          </div>

          {albumId === "celebrities" && (
            <p className="mt-6 max-w-2xl text-sm text-cream/60">
              Famous faces who performed or appeared at weddings I covered —
              singers, dancers, and guests of the night.
            </p>
          )}

          <div className="masonry mt-8">
            {visibleWeddingImages.map((src, i) => (
              <button
                key={`${src}-${i}`}
                type="button"
                className="masonry-item block w-full overflow-hidden"
                onClick={() => open(visibleWeddingImages, i)}
              >
                <img src={src} alt="" className="w-full object-cover transition hover:opacity-90" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="planners" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.35em] text-gold uppercase">
              For wedding planners
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              I photograph the work you built.
            </h2>
          </div>
          <p className="mt-4 max-w-md text-cream/70 md:mt-0">
            Tables, florals, lighting, ceremony sets — coverage that shows the
            planner’s eye, not only the couple’s.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {plannerImages.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`overflow-hidden ${i === 0 || i === 1 ? "col-span-2 md:h-[420px]" : "h-52 md:h-64"}`}
              onClick={() => open(plannerImages, i)}
            >
              <img src={src} alt="" className="h-full w-full object-cover transition hover:scale-[1.03]" />
            </button>
          ))}
        </div>
      </section>

      <section id="events" className="bg-[#100e0c] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.35em] text-gold uppercase">Also covering</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Events</h2>
          <p className="mt-4 max-w-2xl text-cream/70">
            Brand activations, pageants, and nights that need the same energy as
            a wedding — close, fast, and made for social.
          </p>
          <div className="mt-8 flex gap-2">
            {events.map((item) => (
              <FilterChip
                key={item.id}
                active={eventId === item.id}
                onClick={() => setEventId(item.id)}
              >
                {item.title}
              </FilterChip>
            ))}
          </div>
          <p className="mt-6 text-sm text-cream/60">{activeEvent.blurb}</p>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {activeEvent.images.map((src, i) => (
              <button
                key={src}
                type="button"
                className="overflow-hidden"
                onClick={() => open(activeEvent.images, i)}
              >
                <img src={src} alt="" className="h-56 w-full object-cover md:h-72" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="text-[11px] tracking-[0.35em] text-gold uppercase">Brand sessions</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Cookie Zoe, OJA, Nuvola…</h2>
        <p className="mt-4 max-w-2xl text-cream/70">
          Product and lifestyle sessions for food and beauty brands — a smaller
          part of the work, still shot with the same eye.
        </p>
        <div className="mt-12 space-y-16">
          {brands.map((brand) => (
            <div key={brand.id}>
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="font-serif text-3xl">{brand.title}</h3>
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase">
                  {brand.tag}
                </span>
              </div>
              <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                {brand.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    className="h-64 w-56 shrink-0 overflow-hidden md:h-80 md:w-72"
                    onClick={() => open(brand.images, i)}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="bg-[#100e0c] px-5 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] tracking-[0.35em] text-gold uppercase">Weddings, by the hour</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Packages you can reshape.</h2>
          <p className="mt-4 max-w-2xl text-cream/70">
            Coverage is 3, 5, or 8 hours — and those hours can sit anywhere in
            the day. Three hours is not a getting-ready package: it can be the
            party, the ceremony, or whatever window you want. Need more? We
            extend and customize.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.name}
                className={`border p-8 ${
                  item.featured ? "border-gold bg-ink" : "border-cream/15"
                }`}
              >
                {item.featured && (
                  <p className="mb-4 text-[10px] tracking-[0.3em] text-gold uppercase">
                    Most booked
                  </p>
                )}
                <h3 className="font-serif text-3xl">{item.name}</h3>
                <p className="mt-2 text-gold">{item.hours}</p>
                <ul className="mt-6 space-y-3 text-sm text-cream/70">
                  {item.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-cream/60">
            Extended hours are available on every package. Tell me the date and
            the hours you need — we’ll build it around the day, not a fixed
            script.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="border border-cream/15 p-7">
              <p className="text-[10px] tracking-[0.3em] text-gold uppercase">
                Standard rate
              </p>
              <h3 className="mt-3 font-serif text-2xl">Standard coverage</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                The usual rate for 3, 5, or 8 hours. Message me for the current
                list — no posting on my pages is required.
              </p>
            </article>
            <article className="border border-gold/50 p-7">
              <p className="text-[10px] tracking-[0.3em] text-gold uppercase">
                Discounted rate
              </p>
              <h3 className="mt-3 font-serif text-2xl">Share the coverage</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                A lower rate in exchange for permission to post the photos,
                videos, and reels on my Instagram, TikTok, and portfolio. By
                confirming, you agree the coverage can go on my socials.
              </p>
            </article>
          </div>
          <p className="mt-8 text-sm text-cream/50">
            Booking is confirmed once a deposit is paid.
          </p>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block bg-gold px-8 py-3 text-[11px] tracking-[0.25em] text-ink uppercase"
          >
            Ask for hours & rates
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 md:px-8">
        <p className="text-[11px] tracking-[0.35em] text-gold uppercase">Let’s talk</p>
        <h2 className="mt-3 font-serif text-4xl md:text-6xl">
          Tell me the date. I’ll tell you the hours.
        </h2>
        <p className="mt-6 max-w-xl text-cream/70">
          WhatsApp is the fastest way to book a wedding, a planner shoot, or a
          brand session. Instagram and TikTok are where the reels live.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold px-6 py-3 text-ink"
          >
            <WhatsAppIcon />
            {LINKS.phoneDisplay}
          </a>
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-cream/30 px-6 py-3"
          >
            <InstagramIcon />
            @photographala
          </a>
          <a
            href={LINKS.tiktok}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-cream/30 px-6 py-3"
          >
            <TikTokIcon />
            @photographala
          </a>
        </div>
      </section>

      <footer className="border-t border-cream/10 px-5 py-10 text-center text-xs tracking-[0.2em] text-cream/40 uppercase">
        Photographala · Hala · Wedding media coverage
      </footer>

      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      <Lightbox
        images={lightbox.images}
        index={lightbox.index}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 border px-4 py-2 text-[11px] tracking-[0.18em] uppercase ${
        active ? "border-gold bg-gold text-ink" : "border-cream/20 text-cream/70 hover:border-gold"
      }`}
    >
      {children}
    </button>
  );
}
