---
sidebar_position: 2
---

# Installation

## Method #1 - RepoToRoblox

Using our RepoToRoblox plugin is the easiest way to install in Studio.

1. Make sure you have set your GitHub authentication token in the plugin settings.
2. In the RepoToRoblox widget, enter `bura-games` as the owner and `thread-utilities` as the repository.
3. Click the Clone Repository button.

## Method 2 - Wally

1. Setup [Wally](https://wally.run/) by using `wally init`.
2. Add `howmanysmall/thread-utilities` as a dependency.

```toml
[dependencies]
ThreadUtilities = "howmanysmall/thread-utilities@^1.0.1"
```
