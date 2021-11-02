const stencilPlugin = require("../../.eleventy.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(stencilPlugin, {
    namespace: 'MyComponents',
    srcDir: './_stencil/'
  });
};