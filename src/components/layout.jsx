import React from 'react'
import { Global, css } from '@emotion/core'
import Helmet from 'react-helmet'
import Header from './header'
import useSiteMetadata from '../hooks/use-sitemetadata'

const Layout = ({ children, isUnderMenu = true }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global
        styles={css`
          * {
            font-family: 'Merriweather', serif;
            font-family: 'Oswald', sans-serif;
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol"; */
            font-size: 14px;
            line-height: 1.4;

            background-color: #a5abbd;
            background-color: #fafafa;

            @media (min-width: calc(750px + 10vw)) {
              font-size: 18px;
            }

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'Merriweather', serif;
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          margin: 2rem auto;
          margin-top: ${isUnderMenu ? '75px' : 0};
          max-width: 90vw;
          width: 750px;
          min-height: 20rem;
        `}
      >
        {children}
      </main>
      <footer
        css={css`
          margin: 2rem auto;
          max-width: 90vw;
          width: 750px;
          display: flex;
          justify-content: space-between;

          * {
            margin-top: 0;
          }
        `}
      >
        <div>Site map</div>
        <div>Info point</div>
        <div>Other info</div>
      </footer>
    </>
  )
}

export default Layout
