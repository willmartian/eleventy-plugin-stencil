const buildStencil = require("./stencil-plugin.js");
const pkg = require("./package.json");

module.exports = {
  initArguments: {},
  configFunction: function(eleventyConfig, options = {}) {
    try {
      eleventyConfig.versionCheck(pkg["11ty"].compatibility);
    } catch(e) {
      console.log( `WARN: Eleventy Plugin (${pkg.name}) Compatibility: ${e.message}` );
    }

    console.log('11ty + Stencil === <3');

    buildStencil(options);
  }
};