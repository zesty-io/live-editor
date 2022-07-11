# Contributing to Zesty-io/live-editor

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

-  Reporting an issue
-  Discussing the current state of the code
-  Submitting a fix
-  Proposing new features
-  Becoming a maintainer

## Code of Conduct

The code of conduct is described in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Our Development Process

All changes happen through pull requests. Pull requests are the best way to propose changes. We actively welcome your pull requests and invite you to submit pull requests directly [here](https://github.com/zesty-io/live-editor/pulls), and after review, these can be merged into the project.

## Using the Project's Standard Commit Messages

This project is using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) standard. Please follow these steps to ensure your
commit messages are standardized:

```jsx
npm run commit
```

## Pull Requests

1. Fork the repo and create your branch (usually named `patch-%the number of PRs you've already made%`) from `development`.
2. If you've added code that should be tested, add some test examples.
3. Ensure to describe your pull request.

## Quickstart Local Frontend Development

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

assuming the extension is already installed go to a zesty domain website ex `https://www.zesty.io/` then double click the zesty chrome extension to run it.

## Issues

We use GitHub issues to track public bugs. Please ensure your description is
clear and has sufficient instructions to be able to reproduce the issue. Report a bug by <a href="https://github.com/zesty-io/live-editor/issues">opening a new issue</a>; it's that easy!

## Frequently Asked Questions (FAQs)

<!--- I thought it would be great to have a list of FAQs for the project to help save time for new contributors--->

    - Q: [The Question?]
    - A: [The Answer!]

## Feature Request

Great Feature Requests tend to have:

-  A quick idea summary.
-  What & why you wanted to add the specific feature.
-  Additional context like images, links to resources to implement the feature etc, etc.
