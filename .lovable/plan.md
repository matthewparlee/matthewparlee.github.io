

## Plan: Add "AI Evolution" Card Grid Section & Remove Results

### What Changes

1. **Update data model** (`src/data/caseStudies.ts`): Add an optional `aiEvolution` field to the `CaseStudy` interface containing an intro paragraph and an array of cards (title + bullet points). Populate it for the disinfection case study with three cards:
   - **Individualized Learning Paths** — Pre-Assessment Diagnostic, Just-in-Time Support
   - **Advanced Assessment & Practical Feedback** — AI-Simulated Branching Scenarios, Computer Vision Practicals
   - **Metrics & Continuous Improvement** — Predictive Performance Analytics, Sentiment & Engagement Tracking

2. **Remove Results section** from the disinfection case study data (clear the `metrics` array). Remove the Results rendering block from `CaseStudyDetail.tsx`.

3. **Add AI Evolution section** in `CaseStudyDetail.tsx` (rendered after The Process, before prev/next nav): A `motion.section` with the heading "AI Evolution", an intro paragraph, and a responsive card grid (`grid sm:grid-cols-2 lg:grid-cols-3`) using the existing `Card` component. Each card shows a title and a bulleted list of points.

### Technical Details

- Interface addition: `aiEvolution?: { intro: string; cards: { title: string; points: string[] }[] }`
- Cards use existing `Card`, `CardHeader`, `CardTitle`, `CardContent` from `src/components/ui/card.tsx`
- Grid stacks to 1 column on mobile, 2 on `sm`, 3 on `lg`
- Only renders the section when `cs.aiEvolution` is present, so other case studies are unaffected
- The `results` field stays in the interface (other case studies use it) but is emptied for this study

