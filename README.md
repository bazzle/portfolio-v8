# Portfolio v8

## Overview

Personal professional website. With work showcase, about me, articles and more.

[Live site](https://br-web.me)

This is follows from [v7](https://github.com/bazzle/portfolio-v7) built in next.js

## What's new

* Cleaner design
* Typeface change, inline with new brand. Degular > Satoshi
* Spread content across multiple pages, instead of single page approach
* Conventional navigation pattern
* Build process update — AI assisted build, Figma as source-of-truth as much as possible.

## Stack

Framework: Next.js (App Router)
Language: TypeScript
Styling: CSS Modules with BEM naming; CSS variables for all design tokens
Package manager: yarn (use yarn / yarn add / yarn dev — never mix in npm commands)

## Getting Started

```bash
git clone git@github.com:bazzle/portfolio-v8.git
yarn
yarn dev
```

## Rough roadmap

### Phase 1 ✅ Initial build and content population

* Build-out site exactly to spec from Figma file.
* Content review of V7, add new content and migrate existing.

### Phase 2 ✅ Design system

* When Design System is launched, integrate it, consuming tokens from json file using storybook.