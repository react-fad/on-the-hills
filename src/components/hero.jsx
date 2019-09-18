import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 50% center;
  background-size: cover;
  min-height: 500px;
  height: 50vh;
  margin-top: 0;
`;

const TextBox = styled.div`
  background-image: linear-gradient(to top, #a5abbddd 2rem, #a5abbd00);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0;
  padding-bottom: 3rem;

  h1 {
    text-shadow: 1px 1px 3px white;
  }
`;

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
  `);

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
  );
};

export default Hero;
