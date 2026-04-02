

## Plan: Replace "Sales Enablement Job Aids" Case Study

The uploaded Word document contains a completely new case study titled **"Empowering evaluators for high-stakes decision-making"**. This will replace the existing "Sales Enablement Job Aids" entry in the data and update the Case Studies listing page.

### Content Mapping (from Word doc)

| Field | New Content |
|-------|-------------|
| **id** | Keep as `sales-enablement` (or update to `evaluator-decision-making`) |
| **title** | "Empowering Evaluators for High-Stakes Decision-Making" |
| **teaser** | "Designed an experiential ILT and VILT framework that enabled evaluators to assess complex legislative safety and insurance requirements and navigate high-risk decision-making." |
| **tags** | ["ILT/VILT", "Experiential Learning", "Regulatory Training"] |
| **coverImage** | New Unsplash image appropriate for regulatory/evaluation context |
| **overview** | From "Project Overview" section |
| **problem** | From "The Problem" section (two paragraphs) |
| **solution** | Main paragraph + sub-heading "Individual Performance Simulation" as continuation |
| **solutionPoints** | Two bullet points: "Peer-Based Problem-Solving" and "Performance Support Integration" |
| **process** | Four phases: Strategic Scoping & Alignment, Tiered Solutions, Agile Problem-Solving, Adaptive Review Cycles |
| **results** | Empty metrics (no results section in doc) |
| **aiEvolution** | "AI Roadmap: Enhancing the ILT Experience" with intro + 3 cards |

### Changes

**1. Update `src/data/caseStudies.ts`**
- Replace the third case study object (`sales-enablement`) with new content from the Word doc
- Update the id to `evaluator-decision-making`
- Set a relevant Unsplash cover image (e.g., a professional/regulatory/legal themed image)
- The solution section will include the main solution paragraph plus the "Individual Performance Simulation" paragraph, with solutionPoints for the two bullet items
- AI Roadmap intro spans two paragraphs (the intro line + the closing paragraph from page 3); cards: "AI-Supported Simulations", "Targeted Skill Maintenance", "Dynamic Program Adjustments"
- No results/metrics (empty array, matching the pattern of other case studies without metrics)

**2. Update solution rendering consideration**
- The solution bullet points use "Peer-Based Problem-Solving" and "Performance Support Integration" as leading phrases — the existing bold-matching regex looks for verbs like "created/allowed/provided". These new points don't follow that pattern, so the bold logic needs a small tweak to bold text before the colon instead.

### Technical Details

- The `solutionPoints` regex in `CaseStudyDetail.tsx` currently matches on specific verbs. Will update to also bold text before a colon (`:`) since the new points use "Label: description" format.
- The problem field will combine both paragraphs with a line break or keep as single string (the data model uses a single string, so paragraphs will be joined).
- Cover image will use an Unsplash image fitting the regulatory/government/evaluation theme.

