import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 30% center;
  background-size: cover;
  min-height: 500px;
  height: 50vh;
  margin-top: 0;
`

const TextBox = styled.div`
  background-image: linear-gradient(to top, #a5abbddd 2rem, #a5abbd00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  /* padding: 0 calc((100vw - 750px) / 2) 2rem; */
  width: 100%;
  margin-top: 0;

  padding-bottom: 3rem;

  h1 {
    /* text-shadow: 1px 1px 3px #a5abbd66; */
    /* text-shadow: 1px 1px 3px #41162166; */
    text-shadow: 1px 1px 3px white;
    /* font-size: 2.25rem; */
    color: #0c2544;
  }

  p,
  a {
    /* color: #222; */
    color: white;
    color: #0c2544;
    margin-top: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "daniel-tomlinson.jpg" }) {
        # image: file(relativePath: { eq: "holly-mandarich.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <Jumbotron
      css={css`
        padding: 0;
      `}
    >
      <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <TextBox>
          <Container fluid={false}>
            <h1>
              Hop on your adventure with the best Jeep Tours near Brasov and in
              Transylvania's Mountains
            </h1>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </TextBox>
      </ImageBackground>
    </Jumbotron>
  )
}

export default Hero

/* <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
<TextBox>
  <h2>
    Hop on your adventure travel with the best Jeep Tours near Brasov and
    in the Transylvania's Mountains
  </h2>
  {/* <p>
    <Link to="/about/">Learn about me &rarr;</Link>
  </p> */
// </TextBox>
// </ImageBackground> */}
