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
  footer: {
    text: () => {
      return (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>© 함수랑 산악회</span>
          <a
            style={{ color: "#009972", textDecoration: "underline" }}
            href="https://open.kakao.com/o/sTjHAUsf"
            target="_blank"
          >
            <span>Contact Us</span>
          </a>
        </div>
      );
    },
  },
};
