

## Plan: Update site text with Matthew Parlee's resume info

### Files to change

**1. `src/components/Navigation.tsx`** (line 21)
- Change "Portfolio" to "Matthew Parlee"

**2. `src/pages/Index.tsx`**
- **About section** (lines 71-75): Replace bio with Matthew's real background — 10+ years experience across energy, telecom, finance, insurance, and education. Education: B.A. from Mount Allison, B.Ed from UNB, Teacher's Certificate, Project Management Fundamentals. Currently freelance Senior Learning Experience Consultant; previously Senior ID at Innovatia Inc (8 years).
- **Hero subtitle** (line 40): Tailor to Matthew's voice — crafting customized learning experiences across industries

**3. `src/components/Footer.tsx`** (line 8)
- Change "Instructional Designer Portfolio" to "Matthew Parlee"

**4. `src/pages/Contact.tsx`**
- Update LinkedIn href (line 113) to Matthew's actual LinkedIn (placeholder with his name for now)
- Add email display: mcparlee@gmail.com
- Wire the resume download button to serve his actual resume file (copy the uploaded DOCX to `public/Matthew_Parlee_Resume.docx`)

**5. Copy resume file**
- Copy `user-uploads://M_Parlee_Resume_2024.docx` → `public/Matthew_Parlee_Resume.docx` for the download button

### Content mapping from resume

| Site location | Current placeholder | New text (from resume) |
|---|---|---|
| Nav logo | "Portfolio" | "Matthew Parlee" |
| Hero subtitle | Generic ID blurb | Tailored to Matthew's focus on customized learning experiences |
| About paragraph 1 | "8+ years... healthcare, technology, financial services" | "10+ years... energy, telecommunications, finance, insurance, and education" |
| About paragraph 2 | "Master's in ID&T, Articulate Storyline, xAPI, Agile" | "B.A. (Mount Allison), B.Ed (UNB), Project Management Fundamentals (McKenna/IBM/IPMA)" |
| Footer copyright | "Instructional Designer Portfolio" | "Matthew Parlee" |
| Contact LinkedIn | `https://linkedin.com` | Matthew's LinkedIn URL |
| Contact email | (not shown) | mcparlee@gmail.com |
| Resume download | `href="#"` | `/Matthew_Parlee_Resume.docx` |

