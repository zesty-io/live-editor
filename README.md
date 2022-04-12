<img src="https://brand.zesty.io/zesty-io-logo.svg" alt="zesty logo" width="200">

# Zesty.io Explorer

Website/App Overlay Guide for Editing Zesty.io Content

## Overview

Is that the explorer will be a website overlay tool that will guide the user around the data that loads on the page relative to the zesty content management system. The tool will have tabs for searchable on page data, full site navigation, inline editing, website and page health, metadata explorer, image optimization scanning, broken link scanning.

## How to Implement

The tool should be built in compiled JavaScript and execute in plain JavaScript so it can run over any installation of zesty, whether it's parsley templating, next js, nuxt, or any custom build.

## Distribution

It should be distributed over npm package manager and yarn, it should also be able to be manually installed from a CDN link.

Using NPM

`npm install @zesty-io/explorer`

Using CDN

- copy the script tag below and paste it in the head of your main.html file

```
     <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/zesty-io/explorer@latest/dist/explorer.production.js"
      defer="defer"
    ></script>

```

Or

```
     <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/zesty-io/explorer@1.1.3/dist/explorer.production.js"
      defer="defer"
    ></script>

```

Importing

```
import { ZestyExplorer } from   '@zesty-io/explorer';
```

## Explorer Sections

- Page Data Explorer
- Full Site Navigation and Explorer
- Inline Editing (phases)
- Website and Page Health
- Metadata
- Link Scanning
- Optimization Scanning

## Publishing to NPM

Developer must have access to `zestyionpm` account

`npm publish --access public`

## Testing Locally

- Create .env with a value `REACT_APP_DOMAIN_OVERRIDE=https://www.zesty.io`
