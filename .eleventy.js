const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');
// const pluginRss = require("@11ty/eleventy-plugin-rss");
// const { DateTime } = require("luxon");

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

  // RSS plugin is required for our sitemap?
  // config.addPlugin(pluginRss);

  // Required for the above
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  // config.addFilter('htmlDateString', (dateObj) => {
  //   return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  // });

  // Don't ignore codes.json
  config.setUseGitIgnore(false);

  return {

    // what goes where?
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes"
    },

    // some handy options
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true

  };
};
