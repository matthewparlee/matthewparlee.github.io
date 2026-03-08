

## Plan: Move images into Process section, remove Visual Evidence

### Changes

**1. Update data model** (`src/data/caseStudies.ts`)
- Change `process` type from `{ phase: string; description: string }[]` to `{ phase: string; description: string; image?: { src: string; alt: string; caption: string } }[]`
- Distribute the existing `images` array entries into the corresponding process steps (assign one image per step where available)
- Remove the top-level `images` field from the interface and all case study data

**2. Update Case Study Detail page** (`src/pages/CaseStudyDetail.tsx`)
- Remove the entire "Visual Evidence" section
- Within each process step, render the optional `image` below the description text — clickable to open the lightbox
- Update the lightbox to collect images from `cs.process` steps instead of `cs.images`
- Keep lightbox component and keyboard navigation intact

**3. Update Lightbox usage**
- Build the images array dynamically from `process.filter(s => s.image).map(s => s.image)` for the Lightbox component

