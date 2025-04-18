import { GraphQLClient } from 'graphql-request';

const SHOPIFY_DOMAIN = 'https://vans-sa.myshopify.com/api/2025-04/graphql.json';
const ACCESS_TOKEN = 'ef5228ebed75efa3e414855e602b23af';

export const shopifyClient = new GraphQLClient(SHOPIFY_DOMAIN, {
	headers: {
		'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN,
		'Content-Type': 'application/json',
	},
});
