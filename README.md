This repository is an example of USWDS 3.x using sass modules.

## Getting started

To get up and running with this project, you’ll want to use a terminal or shell app to run commands and you will probably want to have Git installed as well, however you can also download a zip file of the project. This project uses [Eleventy](https://www.11ty.dev/) which is a static site generator, more or less a drop in replacement for Jekyll but only uses NPM and thus not reliant on Ruby.

Once you’ve downloaded this project, CD into the root of the project and run `npm install` but be sure you have node version 16 installed or if you are using Node Version Manager, run `nvm use`. (When you run `nvm use`, the command looks for the `.nvmrc file` in the root of the repo which names the version of node.js to use.)

## Start Eleventy and gulp
For now you will need 2 shell windows open, one for Eleventy and the other for Gulp using the following:

```bash
npm run dev
npm run watch
```

Go to the URL for Eleventy you see in the Eleventy shell, most likely `http://localhost:8080`

Next, make some CSS changes, for example in `sass_usda-uswds-theme-custom-styles.scss`. Or make some HTML changes and see your changes update in realtime.

## Testing Components
To test out a component, go to [https://designsystem.digital.gov/components/overview/](https://designsystem.digital.gov/components/overview/) and choose a component to try out. For example, if you want to try the Breadcrumb, go to [https://designsystem.digital.gov/components/breadcrumb/](https://designsystem.digital.gov/components/breadcrumb/). If you go to the bottom of the page under “Package," you will see `@import usa-breadcrumb`. To translate this into the new Sass module method, you can write this as `@use "usa-breadcrumb";` in the styles.scss file around line 40. Note that with any components, if you get an error such as an “extends” warning, that means the component still needs some work done and may not be final yet in terms of USWDS 3.0 stable.

## Roadmap
I’d like to iterate on this repo in the following ways to get a better feeling on how all this works.

1. Add a Gulp watch / Browsersync command as per the example in [https://github.com/uswds/uswds-compile/issues/17](https://github.com/uswds/uswds-compile/issues/17).
2. Test out implementing a non-USWDS component such as accesible UI Tabs for example.
3. <del>Add an Eleventy site wrapper using [https://www.11ty.dev/](https://www.11ty.dev/). Eleventy is more or less a replacement for Jekyll and it builds a static site using more modern methods than Jekyll without the Ruby dependency issues that are sometimes common with Jekyll.</del>

## Resources
* [Node Version Manager](https://github.com/nvm-sh/nvm)
* [USWDS](https://designsystem.digital.gov/)
* [USWDS Components](https://designsystem.digital.gov/components/overview/)
* [USWDS Design Tokens](https://designsystem.digital.gov/design-tokens/)
* [United States Web Design System on Github](https://github.com/uswds/uswds)
* [USWDS 3.0.0 Beta 4](https://github.com/uswds/uswds/discussions/4587)
* [USWDS browserSync integration](https://github.com/uswds/uswds-compile/issues/17)
* [Eleventy](https://www.11ty.dev/) / [https://github.com/11ty/eleventy/](https://github.com/11ty/eleventy/)
