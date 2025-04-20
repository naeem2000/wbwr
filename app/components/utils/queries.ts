// utils/queries.ts
import { gql } from 'graphql-request';

// the blue-print of the response that is requested from the shopify api
export const PRODUCTS_QUERY = gql`
	query getProducts($cursor: String) {
		products(first: 50, after: $cursor) {
			pageInfo {
				hasNextPage
			}
			edges {
				cursor
				node {
					id
					title
					handle
					description
					images(first: 1) {
						edges {
							node {
								url
								altText
							}
						}
					}
					variants(first: 1) {
						edges {
							node {
								id
								price {
									amount
									currencyCode
								}
							}
						}
					}
				}
			}
		}
	}
`;
