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

-  copy the script tag below and paste it in the head of your main.html file

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
      src="https://cdn.jsdelivr.net/gh/zesty-io/explorer@v1.1.12/dist/explorer.production.js"
      defer="defer"
    ></script>

```

Importing

```
import { ZestyExplorer } from   '@zesty-io/explorer';
```

## Explorer Sections

-  Page Data Explorer
-  Full Site Navigation and Explorer
-  Inline Editing (phases)
-  Website and Page Health
-  Metadata
-  Link Scanning
-  Optimization Scanning

## Publishing to NPM

Developer must have access to `zestyionpm` account

`npm publish --access public`

## Deploying the cdn

-  `git checkout cdn`
-  run `yarn release` or `npm run release`

#### In the prompts

-  press 'n' to not publish to npm then the rest press 'y'

#### It will open new window

-  press ok
-  then update the readme version of cdn to current version

#### This is your current updated script tag / cdnjs

```
     <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/gh/zesty-io/explorer@${RELEASE_VERSION_CDN_BRANCH}/dist/explorer.production.js"
      defer="defer"
    ></script>

```

## Testing using NPM

-  On origin/main

```
git checkout -b explorer-dev-test
```

-  Edit `package.json` change the name to @username/explorer-dev-test
-  Edit `package.json` increment the version number per publish
-  Npm publish --access public
-  In your react/next/app

```
import { ZestyExplorer } from   '@username/explorer-dev-test';
```

## Testing Locally using NextJs/CRA

-  Clone the [Zesty Explorer](https://github.com/zesty-io/explorer.git "Zesty Explorer") and [NextJs App](https://github.com/zesty-io/nextjs-website.git "Zesty Nextjs-website") on the same folder

-  cd in the Nextjs app folder
-  Create .env file with a value `NEXT_PUBLIC_DOMAIN_OVERRIDE=https://www.zesty.io`
-  run `npm install`
-  cd in the Zesty Explorer folder
-  run `yarn install`
-  run `npm link ../${YOUR_NEXTJS_APP_FOLDER}/node_modules/react/`
-  run `yarn build`
-  run `yarn start`
-  cd in the Nextjs app folder
-  run `npm i ../${YOUR_EXPLORER_FOLDER}`

#### You can now import the ZestyExplorer in your next js app 🎉🎉🎉

```
import { ZestyExplorer } from '@zesty-io/explorer';
```

-  run `npm run dev`


# Zesty Page Composer Application Overview

Zesty is an application that can make any website or text base document on the internet editable. It runs as javascript application and is powered by a Zesty's multi-tenant cloud based API. It would by piping any directing any live domain with a website through WebEngine. Webengine serves the application through and inject content with Parsley, a templating language that connects to the  the Zesty API. 

## How the experience works

A domain is pointed to Zesty Webengine, and the Zesty Overlay Editor is injected into the page when it renders. The overlay tool lets the user select portions of the page they need to edit, and also gives the user the option to add sections into the page. This is made possible by storing a document which HTML markup and Parlsey is written to. When the document is served, WebEngine will render it by processing and compiling Parsley into a final web document, injecting SEO and webpage needed functionality.   

### Tools in the WebSite Overlay tool

## Content

A tablar view of the content editable on the page, when an item is selected, it scrolls you the approate area, highlights it on page, and allows the user to change and save the page. When the content view is selected, a user may select an area on page where they would like to edit contnet, or add a new block to the page (like a image and text block).

### How blocks work

Blocks are premade design expeirences. They have premade connections to load content. Blocks will be served from a Parsley HTML repo or served into headless app from a React based npm package managed by Zesty (open-source). A user can preview blocks from a block browser, and select which on they want to inject in page.


### Working in headless

Headless applications only need the markup name `<Zesty/>` to render on their finished page, and have their application hosted somewhere remote with a URL that can be plugged into Zesty WebEngine, there are two envirnoment for this, Production and Stage. Pages or URLs get registered in Zesty, and the URL is how the page is resolved, which injects into the page where the `<Zesty/>` tag is. `<Zesty>` can load remotely through a React component, or if the app is loaded through WebEngine only the string `<Zesty/>` needs to be present. 


### Working without Headless

The parlsey tag `{{current_view}}` and `<Zesty/>` function the same. The difference is when Zesty runs the `loader` file in zesty runs and controls the page build, which is automated through WebEngine.

**loader file explantation**

```
<html> (automated from webengine)
  <head></head> (automated from webengine)
  <body> (loader wraps the body)
  {{current_view}} (injects the view rendered relative to the URL)
  </body>
</html> (automated from webengine)
```

### Writing Changes

Zesty Overlay using the Rest API (instances-api) to write both content and files. 

### SEO / Meta / Headtags

A view of the pages SEO and meta values which can be edited, this is not limited to SEO meta tags, but open graph tags, scripts, and other head tags. Head tags are injected into the page though WebEngine, prior to Search Engines reading it. 

