// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-tsx": () => import("./../src/pages/404.tsx" /* webpackChunkName: "component---src-pages-404-tsx" */),
  "component---src-pages-contact-tsx": () => import("./../src/pages/contact.tsx" /* webpackChunkName: "component---src-pages-contact-tsx" */),
  "component---src-pages-index-tsx": () => import("./../src/pages/index.tsx" /* webpackChunkName: "component---src-pages-index-tsx" */),
  "component---src-templates-basepages-tsx": () => import("./../src/templates/basepages.tsx" /* webpackChunkName: "component---src-templates-basepages-tsx" */),
  "component---src-templates-portfolio-list-tsx": () => import("./../src/templates/portfolio-list.tsx" /* webpackChunkName: "component---src-templates-portfolio-list-tsx" */),
  "component---src-templates-portfolio-tsx": () => import("./../src/templates/portfolio.tsx" /* webpackChunkName: "component---src-templates-portfolio-tsx" */)
}

