const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-tsx": hot(preferDefault(require("E:\\customer\\portfoliov2\\src\\pages\\404.tsx"))),
  "component---src-pages-contact-tsx": hot(preferDefault(require("E:\\customer\\portfoliov2\\src\\pages\\contact.tsx"))),
  "component---src-pages-index-tsx": hot(preferDefault(require("E:\\customer\\portfoliov2\\src\\pages\\index.tsx"))),
  "component---src-templates-basepages-tsx": hot(preferDefault(require("E:\\customer\\portfoliov2\\src\\templates\\basepages.tsx"))),
  "component---src-templates-portfolio-list-tsx": hot(preferDefault(require("E:\\customer\\portfoliov2\\src\\templates\\portfolio-list.tsx"))),
  "component---src-templates-portfolio-tsx": hot(preferDefault(require("E:\\customer\\portfoliov2\\src\\templates\\portfolio.tsx")))
}

