const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {

  // This passes through anything in the assets folder into the build, i.e. _site
  eleventyConfig.addPassthroughCopy("src/assets/")
  // Watch for css changes.
  eleventyConfig.addWatchTarget("src/assets/css/")
  eleventyConfig.addWatchTarget("_data")

  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));
  // eleventyConfig.addDataExtension("json", contents => json.load(contents));

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
