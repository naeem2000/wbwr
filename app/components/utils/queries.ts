// utils/queries.ts
import { gql } from 'graphql-request';

// the blue-print of the response that is requested from the shopify api
export const PRODUCTS_QUERY = gql`
	query getProducts($cursor: String) {
		products(first: 2, after: $cursor, query: "tag:'online_stock:available'") {
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
					images(first: 10) {
						edges {
							node {
								url
								altText
							}
						}
					}
					variants(first: 10) {
						edges {
							node {
								id
								title
								availableForSale
								price {
									amount
									currencyCode
								}
								image {
									url
								}
								selectedOptions {
									name
									value
								}
							}
						}
					}
				}
			}
		}
	}
`;
