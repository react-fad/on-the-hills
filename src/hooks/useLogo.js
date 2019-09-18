import { graphql, useStaticQuery } from 'gatsby';

const useTours = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "on-the-hills-logo-tr.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return data;
};

export default useTours;
