---
name: Temporary package cleanup
description: Side effects of installing a one-off inspection tool in this workspace.
---

Installing a package solely to inspect an asset can initialize language-project metadata and add system dependencies. Uninstalling the package and its runtime does not necessarily restore all configuration changes.

**Why:** A temporary PDF inspection dependency altered the workspace's run configuration and created project metadata even though the app itself needed no new dependency. The uninstall left configuration behind.

**How to apply:** When a required inspection tool needs installation, inspect the working-tree diff before and afterward. Remove generated metadata, restore configuration using its validated editing mechanism, and confirm the app still starts before finishing.