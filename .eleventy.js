module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({
    "node_modules/@picocss/pico/css/pico.classless.min.css": "css/pico.classless.min.css"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
