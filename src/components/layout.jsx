import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import Header from './header'
import useSiteMetadata from '../hooks/use-sitemetadata'
import Footer from './footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Layout = ({ children, isUnderMenu = true }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global styles={css``} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
