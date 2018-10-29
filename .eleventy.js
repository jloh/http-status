const CleanCSS = require("clean-css");

module.exports = function (config) {

  // just pass our redirect and header rules through to the dist folder
  config.addPassthroughCopy("_redirects");
  config.addPassthroughCopy("_headers");
  config.addPassthroughCopy("robots.txt");
  config.addPassthroughCopy("src/js");

  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {

    // what goes where?
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },

    // some handy options
    templateFormats: ["njk"],
    passthroughFileCopy: true

  };
};
