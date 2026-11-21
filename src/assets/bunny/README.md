# Bunny photos

Drop image files (`.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`) in this folder and
they'll appear on the `/bunny` page automatically — no code change needed.
Astro optimizes them at build time. Photos are shown sorted by filename: the
numbered ones (`01-`, `02-`, …) come first, then the rest by capture date
(`2026-01-15-032758.jpg`).

Before adding a phone photo, shrink it and strip its metadata, since the repo is
public and phone photos carry GPS coordinates:

```sh
magick PXL_20260115_032758314.jpg -auto-orient -resize '1280x1280>' -quality 80 -strip 2026-01-15-032758.jpg
```
