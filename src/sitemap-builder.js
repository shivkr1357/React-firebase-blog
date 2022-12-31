require("babel-register")({
  presets: ["es2015", "react"],
});
const router = require("./router");
const Sitemap = require("react-router-sitemap").default;
function generateSitemap() {
  return new Sitemap(router)
    .build("https://www.itsindianguy.in")
    .save("./public/sitemap.xml");
}
generateSitemap();
