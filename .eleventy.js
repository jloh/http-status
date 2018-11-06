const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = function (config) {

  // just pass our redirect and header rules through to the dist folder
  config.addPassthroughCopy("_redirects");
  config.addPassthroughCopy("_headers");
  config.addPassthroughCopy("src/js");
  config.addPassthroughCopy("src/css");

  // Cache busting!
  const cacheBusterOptions = {
    outputDirectory: 'dist'
  };
  config.addPlugin(cacheBuster(cacheBusterOptions));

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
