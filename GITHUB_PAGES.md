# GitHub Pages Publish Package

This folder is ready to copy into the GitHub Pages repository that serves:

`elsewherebyavery.com`

Based on the DNS shown in Squarespace, the domain is already pointed at GitHub Pages:

- `www` CNAME -> `kmavery.github.io`
- Apex `A` records -> GitHub Pages IP addresses

## Recommended Publish Path

Copy the `itineraries/` folder from this package into the root of the `kmavery.github.io` repository.

Final URLs:

- `https://elsewherebyavery.com/itineraries/`
- `https://elsewherebyavery.com/itineraries/rockin-the-rhine/`
- `https://elsewherebyavery.com/itineraries/suncadia-anniversary/`
- `https://elsewherebyavery.com/itineraries/cappadocia/`

## GitHub Steps

1. Open the `kmavery.github.io` repository on GitHub.
2. Upload the full `itineraries/` folder.
3. Commit the changes to the Pages publishing branch, usually `main`.
4. Wait for GitHub Pages to rebuild.

## Important

Do not replace the existing repository root unless you want to replace the main website.
Only add or update the `itineraries/` folder.

If GitHub Pages is not already enabled, go to:

`Settings -> Pages`

Then publish from the repository's main branch.
