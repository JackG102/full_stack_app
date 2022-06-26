const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');

module.exports = eleventyConfig => {

  eleventyConfig.addWatchTarget('src/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('src/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })






  eleventyConfig.setTemplateFormats(['md']);
  eleventyConfig.addPlugin(ErrorOverlay);
  eleventyConfig.addPassthroughCopy("src/_assets/");
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      let minified = HtmlMin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });
  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_templates',
      data: '_data',
    },
    jsDataFileSuffix: '.data',
  };
};
