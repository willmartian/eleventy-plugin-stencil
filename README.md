# eleventy-plugin-stencil

Add web components to your 11ty project using Stencil. 

## Usage

Open up your Eleventy config file (probably .eleventy.js) and use `addPlugin`:

```js
// .eleventy.js
const stencilPlugin = require("eleventy-plugin-stencil");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(stencilPlugin);
};
```

### Options

Optionally pass in a [Stencil config object](https://stenciljs.com/docs/config) as the second argument to `addPlugin` to further customize this plugin.

```js
// .eleventy.js
const stencilPlugin = require("eleventy-plugin-stencil");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(stencilPlugin, {
    namespace: 'MyApp',
    srcDir: 'src'
  });
};
```

