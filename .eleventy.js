const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  // This passes through anything in the assets folder into the build, i.e. _site
  eleventyConfig.addPassthroughCopy("src/assets/")

  // Watch for css changes.
  eleventyConfig.addWatchTarget("src/assets/css/")
  eleventyConfig.addWatchTarget("_data")

  // Register yaml data.
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  // Limit filter.
  eleventyConfig.addFilter("limit", function (array, limit) {
    return array.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },

    templateFormats: [
      "md",
      "njk",
      "html",
    ],

    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
