---
name: Branch-switch asset recovery
description: How to handle a recently uploaded asset missing after switching branches.
---

A branch checkout may omit a recently uploaded asset even while generated output from the prior branch remains in the workspace. Treat the generated copy as a recovery candidate, not as the source of truth.

**Why:** An older document with the same purpose was available on the destination branch, while the newer upload survived only in generated output. Using the visible older file would have silently published the wrong version.

**How to apply:** Before porting an uploaded asset across branches, search both source assets and build output. Verify the recovered file's content and version, copy it into the app's tracked source path before rebuilding, and confirm the served file matches.