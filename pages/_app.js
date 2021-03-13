import * as React from 'react'
import App from 'next/app'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'theme-ui'

const Header = dynamic(
  () => import('../components/header'),
  { ssr: false }
)

import theme from '../components/theme'
import Meta from '../components/meta'
import NProgress from '../components/nprogress'
import Nav from '../components/nav'
import Footer from '../components/footer'

class Root extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <NProgress color={theme.colors.accent} />
        <Nav />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Root
