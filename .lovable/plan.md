

# Instructional Designer Portfolio Website

## Design System
- **Colors**: Charcoal (`#2D2D2D`), Off-White (`#F8F7F4`), Cobalt accent (`#2563EB`), with muted grays for borders/secondary text
- **Typography**: Inter or similar sans-serif for headings (bold, large), system sans-serif for body text with generous line-height
- **Spacing**: Generous white space, max-width container (~1100px), large section padding

## Pages & Components

### 1. Home Page
- **Hero Section**: Full-width with bold headline ("Bridging Performance Gaps Through Evidence-Based Design"), subtitle, and CTA button linking to case studies
- **About Section**: Two-column layout — professional headshot placeholder on one side, narrative bio text on the other
- **Design Philosophy**: Three-card grid showcasing core principles (e.g., Cognitive Load Theory, Scenario-Based Learning, User-Centricity) with icons and brief descriptions

### 2. Case Studies Page
- **Project Grid**: Clean card grid with cover image, project title, short teaser, and tags (e.g., "E-Learning", "Job Aid"). Cards link to individual case study pages
- Uses sample/placeholder data for 3-4 projects

### 3. Individual Case Study Page (Dynamic route)
- Structured narrative layout with clearly separated sections:
  - **Project Overview** — summary card at top
  - **The Problem** — performance gap description
  - **The Solution** — instructional strategy
  - **The Process** — ADDIE/SAM phase narrative with timeline or step indicators
  - **Visual Evidence** — responsive image gallery with lightbox for full-resolution viewing of screenshots/storyboards
  - **The Results** — highlighted impact box with metrics/feedback quote
- Navigation to previous/next case study

### 4. Contact Page
- Clean contact form (Name, Email, Subject, Message) with client-side validation
- Sidebar or section with LinkedIn link and "Download Resume" button
- Toast notification on form submission

### 5. Shared Components
- **Navigation**: Sticky header with logo/name, nav links (Home, Case Studies, Contact), mobile hamburger menu
- **Footer**: Minimalist — copyright, nav links, LinkedIn icon
- **Lightbox**: Modal image viewer with keyboard navigation for case study images

### Accessibility & Performance
- Semantic HTML throughout (main, section, article, nav)
- ARIA labels, focus management, high-contrast text ratios
- Lazy-loaded images with placeholder shimmer
- Responsive from mobile (320px) to desktop

All content will use editable placeholder data so the user can easily swap in their real text, images, and case studies.

