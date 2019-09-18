import { graphql, useStaticQuery } from 'gatsby';

const useGalleryPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { absolutePath: { regex: "/galleryImages/" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  return data.allFile.nodes.map(image => image);
};

export default useGalleryPhotos;
