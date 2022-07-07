<p align="center">

<img src="https://brand.zesty.io/zesty-io-logo.svg" alt="zesty logo" width="200">
<p>

<h1 align="center"> Zesty.io Live Editor </h1>
<p align="center">
Website/App Overlay Guide for Editing Zesty.io Content
<p>

## Overview

Is that the explorer will be a website overlay tool that will guide the user around the data that loads on the page relative to the zesty content management system. The tool will have tabs for searchable on page data, full site navigation, inline editing, website and page health, metadata explorer, image optimization scanning, broken link scanning.

## How to Implement

The tool should be built in compiled JavaScript and execute in plain JavaScript so it can run over any installation of zesty, whether it's parsley templating, next js, nuxt, or any custom build.

## Distribution

It should be distributed over npm package manager and yarn, it should also be able to be manually installed from a CDN link.

Using NPM

```jsx
npm install @zesty-io/live-editor
```

```jsx
import { ZestyLiveEditor } from "@zesty-io/live-editor"

React.useEffect(() => {
   ZestyLiveEditor(data)
}, [])
```

Using CDN

-  copy the script tag below and paste it in the head of your main.html file

```jsx
<script
   type="text/javascript"
   src="https://cdn.jsdelivr.net/gh/zesty-io/live-editor@latest/dist/live-editor.production.js"
   defer="defer"
></script>
```

Note, if your website has a strict content security policy or x-frame-options, you will need to add this url to your white list

```
https://cdn.jsdelivr.net/gh/zesty-io/live-editor@latest/dist/live-editor.production.js
```

# Publishing to NPM

-  Manually: `npm run manual-publish`
-  Github flow: any merge to main will run a release and publish flow

# Zesty Page Composer Application Overview

Zesty is an application that can make any website or text base document on the internet editable. It runs as javascript application and is powered by a Zesty's multi-tenant cloud based API. It would by piping any directing any live domain with a website through WebEngine. Webengine serves the application through and inject content with Parsley, a templating language that connects to the the Zesty API.

## Design

Figma file https://www.figma.com/file/TsOMa4gbWHgMzWyXH8MXpt/Explorer?node-id=0%3A1

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

```jsx
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

# How to run locally

Edit the hostfile in linux or MacOs

```jsx
sudo vim /etc/hosts
```

then add the line

```jsx
127.0.0.1 test.zesty.io
```

Clone the Zesty Live-Editor and Zesty Chrome Extension on same folder :

```jsx
git clone https://github.com/zesty-io/live-editor.git
```

```jsx
git clone https://github.com/zesty-io/chrome-ext.git
```

on the Zesty Chrome Extension Directory run

Chrome Extension Repo https://github.com/zesty-io/chrome-ext

```jsx
git checkout development
```

then install the extension locally [here](https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/)

after that change directory to the Zesty Live-editor folder then run the following command

```jsx
git checkout development && npm install && npm start
```

assuming the extension is already installed go to a zesty domain website ex `https://www.zesty.io/` the double click the zesty chrome extension to run it.

# How to Commit

```jsx
npm run commit
```

# Deploying in Production

```jsx
git checkout main && npm run release
```

## Testing Locally in the browser

-  run `npm start` to start the application locally
-  Open /test/index.html in your browser
-  Remove index.html from the browser file path
-  use this override domain `https://qzp3zx5t-dev.webEngine.zesty.io/`

   Updated on
   Thu Jul 7 13:21:18 UTC 2022

   Updated on
   Thu Jul 7 13:23:57 UTC 2022

   Updated on
   Thu Jul 7 13:26:05 UTC 2022

   Updated on 
Thu Jul  7 13:36:27 UTC 2022