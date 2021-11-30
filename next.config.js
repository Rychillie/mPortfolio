const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  cssModules: true,
});

module.exports = {
  /* Adicione sua pasta padrão de SCSS aqui! */
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
