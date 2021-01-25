// .eleventy.js
module.exports = function (eleventyConfig) { 
  const MarkdownIt = require("markdown-it");
  const mdRender = new MarkdownIt();
  eleventyConfig.addFilter("markdown", function (rawString) {
    return mdRender.render(rawString);
  });
}
