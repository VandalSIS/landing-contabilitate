/** Verified Unsplash photo IDs (HTTP 200). */
function img(id: string, w = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const images = {
  heroMain: img("photo-1554224155-6726b3ff858f", 900),
  heroSecondary: img("photo-1600880292089-90a7e086ee0c", 500),
  whyUsMain: img("photo-1454165804606-c3d57bc86b40", 800),
  whyUsSecondary: img("photo-1573496359142-b8d87734a5a2", 400),
  ctaBanner: img("photo-1497366216548-37526070297c", 1600),
  showcase: [
    img("photo-1556761175-5973dc0f32e7", 700),
    img("photo-1542744173-8e7e53415bb0", 700),
    img("photo-1573164713714-d95e436ab8d6", 700),
    img("photo-1560518883-ce09059eeffa", 700),
  ],
} as const;
