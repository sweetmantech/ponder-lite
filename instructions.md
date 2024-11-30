# Instructions

## Problem: The current indexer codebase using @ponder/core works locally but fails when deployed to the digital ocean droplet. Issue seems to arise from sqlite / wasm packages.

## Goal: modify Ponder package to only do indexing and not the local postgress database.

1. Think through how we can update this package to remove the postgres dependency and wasm dependencies. What instructions do we need to follow to make sure we can deploy this to the digital ocean droplet? smallest size of digital ocean droplet 4GB.
2. Update the ponder-join-indexer to use the modified functionality in ponder-lite-core instead of @ponder/core.
3. Modify the ponder-lite-core package to remove PostgreSQL dependencies.
4. Modify the core to focus only on indexing.
