

## Plan: Update Evaluator Case Study Cover Image

Generate a new abstract image using the AI image generation API that suggests analysis of case data — no faces. Then replace the current `src/assets/evaluator-case-study.jpg`.

### Steps

1. **Generate image** via `google/gemini-2.5-flash-image` with a prompt like: "Abstract professional illustration of data analysis, documents, charts, and case files on a desk. No people or faces. Muted blue and gray tones, clean modern style."
2. **Save** the base64 result to `src/assets/evaluator-case-study.jpg`, replacing the existing file.

No code changes needed since the data already references this asset path.

