/** High-res Unsplash URLs for sharp display on retina screens. */
function img(id: string, w = 1920) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=90`;
}

export const images = {
  heroMain: img("photo-1554224155-6726b3ff858f", 2000),
  heroSecondary: img("photo-1600880292089-90a7e086ee0c", 1200),
  whyUsMain: img("photo-1454165804606-c3d57bc86b40", 1600),
  whyUsSecondary: img("photo-1573496359142-b8d87734a5a2", 800),
  ctaBanner: img("photo-1497366216548-37526070297c", 2400),
  showcase: [
    img("photo-1556761175-5973dc0f32e7", 1200),
    img("photo-1542744173-8e7e53415bb0", 1200),
    img("photo-1573164713714-d95e436ab8d6", 1200),
    img("photo-1560518883-ce09059eeffa", 1200),
  ],
} as const;
