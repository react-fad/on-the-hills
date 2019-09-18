import React from 'react';
// import Layout from '../components/layout';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Image from 'gatsby-image';

import useGalleryPhotos from '../hooks/useGalleryPhotos';

import '../custom.scss';

// de incercat
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_image_grid_responsive

const PhotoGallery = styled.section``;
const GalleryThumb = styled(Image)`
  width: 100%;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
  max-width: 100%;
`;

export default () => {
  const images = useGalleryPhotos();
  return (
        <PhotoGallery
          css={css`
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: repeat(3, auto);
            grid-gap: 15px;
          `}
        >
          {images.map(image => {
            console.log('image = ', image);
            return (
              <GalleryThumb
                key={image.childImageSharp.fluid.src}
                fluid={image.childImageSharp.fluid}
                alt={image.childImageSharp.title}
              />
            );
          })}
        </PhotoGallery>
  );
};
