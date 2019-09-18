exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to get tours', result.errors);
  }

  const tours = result.data.allMdx.nodes;

  tours.forEach(tour => {
    actions.createPage({
      path: `/jeep-tours/${tour.frontmatter.slug}/`,
      component: require.resolve('./src/templates/tour.js'),
      context: {
        slug: tour.frontmatter.slug,
      },
    });
  });
};
