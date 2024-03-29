import * as React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'theme-ui'
import '../public/fonts.css'

import theme from '../components/theme'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Header from '../components/header'
import Footer from '../components/footer'

class Root extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Meta />
        <Nav />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Root
