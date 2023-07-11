/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <span>쏙쏙쑥쑥</span>,
  project: {
    link: "https://github.com/function-and-mountain/functional-coding-nutshell",
  },
  docsRepositoryBase:
    "https://github.com/function-and-mountain/functional-coding-nutshell/tree/main/apps/docs",
  sidebar: {
    toggleButton: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – 쏙쏙쑥쑥",
    };
  },
};
