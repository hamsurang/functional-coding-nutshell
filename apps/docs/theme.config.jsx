import OgImage from './public/og.png'

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <span>쏙쏙쑥쑥</span>,
  project: {
    link: 'https://github.com/function-and-mountain/functional-coding-nutshell',
  },
  docsRepositoryBase:
    'https://github.com/function-and-mountain/functional-coding-nutshell/tree/main/apps/docs',
  sidebar: {
    toggleButton: true,
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – 쏙쏙쑥쑥',
    }
  },
  head: () => (
    <>
      <meta
        property="og:description"
        content="쏙쏙쑥쑥 스터디 - 함수랑 산악회 주최"
      />
      <meta property="og:image" content={OgImage.src} />
    </>
  ),
  footer: {
    text: () => (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>© 함수랑 산악회</span>
        <a
          style={{ color: '#009972', textDecoration: 'underline' }}
          href="https://open.kakao.com/o/sTjHAUsf"
          target="_blank"
          rel="noreferrer"
        >
          <span>Contact Us</span>
        </a>
      </div>
    ),
  },
}
