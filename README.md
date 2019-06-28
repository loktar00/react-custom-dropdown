# Enterprise base application

## Scripts

    * test, runs jest (in progress)
    * dev, runs webpack watcher does standard transpiling
    * dev:server runs watcher with webpack-dev-server
    * release, release build for production

## Libraries/Technlologies

####Build and transpiling
    * Typescript -> Babel -> ES5
    * Sass -> CSS

### Testing
    * Jest

### Linting
    * eslint
    * stylelint

### General
    * React/ReactDOM 16.*
    * React-Router
    * Mobx


## Setting up and building

1. For initial setup run ```npm install```.
2. Normal building/development use ```npm run dev:server```.
3. For testing run ```npm test``` runs snapshop tests

## General Development Guidelines

### Component structure / general creation

When creating a component if an external style sheet will be needed created a directory with the component name, and create the files within. Components use a .tsx extension. When adding a stylesheet add the appropriate reference to `src/styles/components.scss`.


#### Notes / TODO

* Implement some sort of test visualizer for react components.

* Fix common components.. they generate a lot of code

* implement code splitting

* Continue documentation
