import OgImage from './public/og.png'

/** @type {import('nextra-theme-docs').DocsThemeConfig} */
export default {
  logo: <span>쏙쏙쑥쑥</span>,
  banner: {
    key: '2기모집',
    text: (
      <a
        href="https://minsooweb.notion.site/2-070c5e9d9ed342449bb94e6bbb7b1a2e?pvs=4"
        target="_blank"
      >
        🚀 쏙쏙쑥쑥 2기를 모집하고 있습니다. 신청하기!! →
      </a>
    ),
  },
  project: {
    link: 'https://github.com/function-and-mountain/functional-coding-nutshell',
  },
  chat: {
    link: 'https://discord.gg/gRcpkZHa',
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
