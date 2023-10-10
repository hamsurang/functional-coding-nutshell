/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins')
const nextra = require('nextra')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  defaultShowCopyCode: true,
}

const withNextra = nextra(nextraConfig)

module.exports = withPlugins([withNextra], nextConfig)
