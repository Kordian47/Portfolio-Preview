---
name: Uppercase image imports
description: Why a successful Vite build may coexist with image-module errors from TypeScript.
---

Vite can bundle image imports with an uppercase `.PNG` extension even when TypeScript's built-in asset module declarations recognize only lowercase image extensions.

**Why:** Existing uppercase image imports produced `Cannot find module` errors in the project's type check while the same app built and rendered correctly. This can be mistaken for an error introduced by nearby feature work.

**How to apply:** When a type check reports unresolved image imports but the build succeeds, check filename case and available module declarations before changing unrelated page code. If type-check cleanliness is in scope, add an appropriate asset declaration or standardize extensions deliberately.