export const PRODUCTS_QUERY = `
{
  products(first: 10) {
    edges {
      node {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              url
            }
          }
        }
      }
    }
  }
}
`;
