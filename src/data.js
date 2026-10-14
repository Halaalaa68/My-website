export const LINKS = {
  instagram: "https://www.instagram.com/photographala",
  tiktok: "https://www.tiktok.com/@photographala",
  whatsapp: "https://wa.me/201150615985",
  phoneDisplay: "0115 061 5985",
};

const w = (file) => `/images/root/${file}`;
const folder = (dir, file) => `/images/${dir}/${file}`;

export const HALA_PHOTO = folder("my-photo", "my-photo.jpg");

export const weddingAlbums = [
  {
    id: "full-day",
    title: "From prep to the last dance",
    tag: "Full coverage",
    blurb: "Getting ready, the first look, the dance floor, and everything in between.",
    cover: w("img-7483.jpg"),
    images: [
      w("img-7372.jpg"),
      w("img-3108.jpg"),
      w("img-7478.jpg"),
      w("img-7483.jpg"),
      w("img-7487.jpg"),
      w("img-7374.jpg"),
    ],
  },
  {
    id: "black-barbie",
    title: "Black Barbie",
    tag: "Blogger wedding",
    blurb: "Media coverage for a blogger wedding — the entrance, the dance, the night.",
    cover: folder("black-barbie", "img-3109.jpg"),
    images: [
      folder("black-barbie", "img-3109.jpg"),
      folder("black-barbie", "img-3111.jpg"),
    ],
  },
  {
    id: "getting-ready",
    title: "Getting ready",
    tag: "Bride prep",
    blurb: "Hair, makeup, shoes, rings, and the quiet hour before the day begins.",
    cover: w("2026-09-09-16-17-37-img-7843.jpg"),
    images: [
      w("2026-05-05-13-48-34-img-4486.jpg"),
      w("2026-05-05-13-48-48-img-4493.jpg"),
      w("2026-05-05-13-49-09-img-4496.jpg"),
      w("2026-09-09-12-58-09-img-7589.jpg"),
      w("2026-09-09-13-04-37-img-7568.jpg"),
      w("2026-09-09-13-09-40-img-7554.jpg"),
      w("2026-09-09-16-17-37-img-7843.jpg"),
      w("2026-09-09-16-43-27-img-7848.jpg"),
      w("2026-09-09-16-47-21-img-7850.jpg"),
      w("2026-09-09-17-08-06-img-7781.jpg"),
    ],
  },
  {
    id: "katb-ketab",
    title: "Katb Ketab",
    tag: "Ceremony",
    blurb: "Portraits, florals, and the moment the day becomes official.",
    cover: w("2026-10-01-17-50-06-img-7604.jpg"),
    images: [
      w("2026-10-01-17-35-10-img-7566.jpg"),
      w("2026-10-01-17-50-06-img-7604.jpg"),
      w("2026-10-01-17-58-50-img-7674.jpg"),
      w("2026-10-03-19-01-08-img-1180.jpg"),
    ],
  },
  {
    id: "henna",
    title: "Henna night",
    tag: "Tradition",
    blurb: "Color, ritual, and the first celebration of the wedding week.",
    cover: w("2026-03-25-16-12-43-img-1033.jpg"),
    images: [w("2026-03-25-16-12-43-img-1033.jpg")],
  },
  {
    id: "nile-nights",
    title: "Nights by the Nile",
    tag: "Reception",
    blurb: "String lights, toasts, and the party after the vows.",
    cover: w("img-3119.jpg"),
    images: [w("img-3119.jpg"), w("img-3121.jpg"), w("img-3122.jpg")],
  },
  {
    id: "the-night",
    title: "The night",
    tag: "Live music",
    blurb: "Bands, stages, and the energy that turns a wedding into a memory.",
    cover: w("img-4937.jpg"),
    images: [
      w("img-4587.jpg"),
      w("img-4887.jpg"),
      w("img-4937.jpg"),
      w("img-4953.jpg"),
      w("img-5020.jpg"),
      w("img-5930.jpg"),
    ],
  },
  {
    id: "celebrities",
    title: "Celebrities at the celebrations",
    tag: "Guest stars",
    blurb: "Singers, dancers, and famous faces who joined the weddings I covered.",
    cover: w("celeb2.jpg"),
    images: [w("celeb1.jpg"), w("celeb2.jpg"), w("celeb3.jpg"), w("celeb4.jpg")],
  },
];

export const plannerImages = [
  folder("wedding-planning-work", "img-4604.jpg"),
  folder("wedding-planning-work", "img-4643.jpg"),
  folder("wedding-planning-work", "2026-10-03-16-31-59-img-0823.jpg"),
  folder("wedding-planning-work", "2026-10-03-16-32-45-img-0827.jpg"),
  folder("wedding-planning-work", "2026-10-03-16-30-50-img-0814.jpg"),
  folder("wedding-planning-work", "2026-10-03-18-31-41-img-1140.jpg"),
  folder("wedding-planning-work", "2026-10-02-17-51-05-img-0290.jpg"),
  folder("wedding-planning-work", "2026-10-02-18-59-32-img-0401.jpg"),
  folder("wedding-planning-work", "2026-10-02-19-02-54-img-0410.jpg"),
  folder("wedding-planning-work", "img-4530.jpg"),
  folder("wedding-planning-work", "img-4547.jpg"),
  folder("wedding-planning-work", "img-4730.jpg"),
  folder("wedding-planning-work", "img-4793.jpg"),
  folder("wedding-planning-work", "img-4816.jpg"),
  folder("wedding-planning-work", "img-5086.jpg"),
  folder("wedding-planning-work", "img-5109.jpg"),
];

export const events = [
  {
    id: "garnier",
    title: "Garnier",
    tag: "Brand event",
    blurb: "On-ground coverage for a live brand activation — booths, guests, and the stage.",
    images: [
      folder("garnier", "2026-08-04-20-08-49-img-3068.jpg"),
      folder("garnier", "2026-08-04-18-32-01-img-2972.jpg"),
      folder("garnier", "2026-08-04-18-39-25-img-2979.jpg"),
      folder("garnier", "2026-08-04-19-33-41-img-3152.jpg"),
      folder("garnier", "2026-08-04-22-55-25-img-3135.jpg"),
    ],
  },
  {
    id: "miss-arab-world",
    title: "Miss Arab World",
    tag: "Pageant",
    blurb: "Backstage, interviews, and the energy around the competition.",
    images: [
      folder("miss-arab-world-2023", "1.jpg"),
      folder("miss-arab-world-2023", "5.jpg"),
      folder("miss-arab-world-2023", "2.jpg"),
      folder("miss-arab-world-2023", "3.jpg"),
      folder("miss-arab-world-2023", "4.jpg"),
      folder("miss-arab-world-2023", "6.jpg"),
      folder("miss-arab-world-2023", "7.jpg"),
      folder("miss-arab-world-2023", "8.jpg"),
    ],
  },
];

export const brands = [
  {
    id: "cookie-zoe",
    title: "Cookie Zoe",
    tag: "Food session",
    images: [
      folder("cookie-zoe", "2026-02-13-16-09-56-img-9557.jpg"),
      folder("cookie-zoe", "2026-02-13-16-11-43-img-9285.jpg"),
      folder("cookie-zoe", "2026-02-13-16-12-05-img-9290.jpg"),
    ],
  },
  {
    id: "oja",
    title: "OJA",
    tag: "Beauty session",
    images: [
      folder("oja", "img-8056-jpg.jpg"),
      folder("oja", "img-8044.jpg"),
      folder("oja", "img-8045.jpg"),
      folder("oja", "img-8183-jpg.jpg"),
      folder("oja", "img-8052.jpg"),
      folder("oja", "img-8053.jpg"),
      folder("oja", "img-8185.jpg"),
    ],
  },
  {
    id: "nuvola",
    title: "Nuvola Bakehouse",
    tag: "Food session",
    images: [
      folder("nuvola", "2026-04-09-16-07-42-img-2900.jpg"),
      folder("nuvola", "2026-04-09-16-25-24-img-2993.jpg"),
      folder("nuvola", "2026-04-09-16-16-44-img-2948.jpg"),
      folder("nuvola", "2026-04-09-16-37-51-img-3033.jpg"),
      folder("nuvola", "2026-04-09-16-43-17-img-3052.jpg"),
      folder("nuvola", "2026-04-09-16-56-13-img-3093.jpg"),
    ],
  },
];

export const packages = [
  {
    name: "3 Hours",
    hours: "Any window of the day",
    points: [
      "Not only getting ready — it can be the ceremony, the party, or any three hours you choose",
      "Photos, video, plus 3 reels and TikToks",
      "The shortest set package, still fully customizable",
    ],
  },
  {
    name: "5 Hours",
    hours: "A longer stretch of the day",
    points: [
      "Enough time for two parts of the wedding, or a long reception",
      "Photos, video, plus 5 reels and TikToks",
      "Add extra hours if the night runs on",
    ],
  },
  {
    name: "8 Hours",
    hours: "A full wedding story",
    featured: true,
    points: [
      "From prep into the party, or whatever eight hours matter most",
      "Photos, video, plus 10 reels and TikToks",
      "A second shooter from the team when needed",
    ],
  },
];
