import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        price
      }
      body
    }
  }
`;

const TourTemplate = ({ data: { mdx: tour } }) => (
  <Layout>
    <h1>{tour.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Price {tour.frontmatter.price}
    </p>
    <MDXRenderer>{tour.body}</MDXRenderer>
  </Layout>
);

export default TourTemplate;
