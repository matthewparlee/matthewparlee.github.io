

## Scroll to Top on Case Study Navigation

When clicking prev/next links at the bottom of a case study, the page stays at the same scroll position. We need to scroll to the top when navigating between case studies.

### Change

**`src/pages/CaseStudyDetail.tsx`** — Add a `useEffect` that scrolls to the top whenever the `id` param changes:

```ts
useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);
```

This triggers every time a new case study loads via the prev/next links, ensuring users start from the top.

