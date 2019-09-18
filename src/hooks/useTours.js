import { graphql, useStaticQuery } from 'gatsby';

const useTours = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___title, order: ASC }) {
        nodes {
          frontmatter {
            title
            price
            slug
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    price: post.frontmatter.price,
    slug: post.frontmatter.slug,
    excerpt: post.excerpt,
  }));
};

export default useTours;
