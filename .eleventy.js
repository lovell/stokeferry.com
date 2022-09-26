const pluginPurgeCss = require("eleventy-plugin-purgecss");

const categories = [
  "parish-councils",
  "boughton",
  "stoke-ferry",
  "wereham",
  "west-dereham",
  "whittington",
  "wretton",
];

const years = [...Array(21).keys()].map((k) => k + 2001); // 2001..2021

const defaultHeaderImage = "river-wissey-lovell-fuller";
const headerImages = {
  boughton: "boughton-church-window-gary-trouton",
  "broad-norfolk": "stoke-ferry-a134-lovell-fuller",
  "stoke-ferry": "war-memorial-gary-trouton",
  wereham: "wereham-sign-gary-trouton",
  "west-dereham": "west-dereham-sign-gary-trouton",
  wretton: "wretton-sign-gary-trouton",
};

const headerImageFilter = (categories) => {
  const headerImage = (categories || []).find((category) =>
    Object.keys(headerImages).includes(category)
  );
  return headerImages[headerImage] || defaultHeaderImage;
};

const monthAndYearFilter = (d) =>
  new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long" }).format(
    new Date(d)
  );

module.exports = function (eleventyConfig) {
  // Static files
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/css/bootstrap.min.css":
      "css/bootstrap.min.css",
  });
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
      "js/bootstrap.bundle.min.js",
  });
  // Collections
  categories.forEach((category) =>
    eleventyConfig.addCollection(category, (collectionApi) =>
      collectionApi
        .getAllSorted()
        .reverse()
        .filter(
          (item) =>
            Array.isArray(item.data.categories) &&
            item.data.categories.includes(category)
        )
    )
  );
  years.forEach((year) =>
    eleventyConfig.addCollection(year, (collectionApi) =>
      collectionApi
        .getAllSorted()
        .reverse()
        .filter((item) => item.inputPath.includes(`/${year}/`))
    )
  );
  eleventyConfig.addCollection("all-reverse", (collectionApi) =>
    collectionApi.getAllSorted().reverse()
  );
  // Filters
  eleventyConfig.addFilter("headerImage", headerImageFilter);
  eleventyConfig.addFilter("monthAndYear", monthAndYearFilter);
  // Plugins
  eleventyConfig.addPlugin(pluginPurgeCss);
};
