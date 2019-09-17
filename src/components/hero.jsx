import React from 'react'
import styled from '@emotion/styled'
import { Link, graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const ImageBackground = styled(BackgroundImage)`
  background-position: bottom 30% center;
  background-size: cover;
  min-height: 500px;
  height: 50vh;
  margin-top: 0;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`

const TextBox = styled('div')`
  background-image: linear-gradient(to top, #a5abbddd 2rem, #a5abbd00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  padding: 0 calc((100vw - 750px) / 2) 2rem;
  width: 100%;
  margin-top: 0;

  h2 {
    text-shadow: 1px 1px 3px #a5abbd66;
    text-shadow: 1px 1px 3px #41162166;
    text-shadow: 1px 1px 3px white;
    font-size: 2.25rem;
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
      # image: file(relativePath: { eq: "daniel-tomlinson.jpg" }) {
      # image: file(relativePath: { eq: "holly-mandarich.jpg" }) {
      image: file(relativePath: { eq: "daniel-tomlinson.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextBox>
        <h2>
          Hop on your adventure travel with the best Jeep Tours near Brasov and
          in the Transylvania's Mountains
        </h2>
        {/* <p>
          <Link to="/about/">Learn about me &rarr;</Link>
        </p> */}
      </TextBox>
    </ImageBackground>
  )
}

export default Hero
