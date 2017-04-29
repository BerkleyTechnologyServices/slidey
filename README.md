# Slidey

[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![Travis][travis-ci-image]][travis-ci-url]
[![Coveralls][coveralls-image]][coveralls-url]

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![semantic-release][semantic-release-image]][semantic-release-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]

Registers filter components allowing for a single input and output!

## Install

You can install this package either with `npm` or with `bower`.

## npm

```sh
$ npm install slidey
```
Then add a `<script>` to your index.html:
```html
<script src="/node_modules/slidey/dist/slidey.js"></script>
```
Or `require('slidey')` from your code.

## bower

```sh
$ bower install BerkleyTechnologyServices/slidey
```
Then add a `<script>` to your index.html:
```html
<script src="/bower_components/slidey/dist/slidey.js"></script>
```

## Example

[Live Demo](https://jsbin.com/yodaway/edit?html,output)

## Usage

```html
<slidey opened="someBooleanValue">
  My content that will appear in the aside
  <slidey opened="someOtherBooleanValue">
    My content that will appear in the nested aside
  </slidey>
</slidey>
```

## Bindings

### Opened

**Default:** `false`

**Description**

Determines whether the slidey is opened or closed.

**Example**

```html
<slidey opened="true">
  My super cool content!
</slidey>
```

### Content Width

**Default:** `80%`

**Description**

Determines the width of the slidey when opened.

**Example**

```html
<slidey content-width="200px">
  My super cool content!
</slidey>
```

### Reflow Container

**Default:** `undefined`

**Description**

Adjusts the height of the container to the height of the active slidey.

**Example**

```html
<div id="modal">
  <slidey reflow-container="modal">
    My super cool content!
  </slidey>
</div>
```

**Known Issues**

- When a transition is placed on `height` it is not animated in all cases unless the container has a height specified.

## Events

### Close

**Description**

Fires off when the opened binding changes from true to false.

**Example**

```html
<slidey on-close="$ctrl.onClose()">
  My super cool content!
</slidey>
```

### Close Finished

**Description**

Fires off when the closing animation finishes.

**Example**

```html
<slidey on-close-finished="$ctrl.onCloseFinished()">
  My super cool content!
</slidey>
```

[npm-version-image]: http://img.shields.io/npm/v/@bts/slidey.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/@bts/slidey.svg?style=flat
[npm-url]: https://npmjs.org/package/@bts/slidey

[travis-ci-image]: https://img.shields.io/travis/BerkleyTechnologyServices/slidey.svg?style=flat
[travis-ci-url]: https://travis-ci.org/BerkleyTechnologyServices/slidey

[coveralls-image]: https://img.shields.io/coveralls/BerkleyTechnologyServices/slidey/master.svg
[coveralls-url]: https://coveralls.io/github/BerkleyTechnologyServices/slidey

[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

[greenkeeper-image]: https://badges.greenkeeper.io/BerkleyTechnologyServices/slidey.svg
[greenkeeper-url]: https://greenkeeper.io
