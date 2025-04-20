import { ShopifyProduct, ShopifyProductResponse } from '../utils/modules';
import { shopifyClient } from '../utils/ShopifyClient';
import { PRODUCTS_QUERY } from '../utils/queries';
import { useQuery } from '@tanstack/react-query';

const fetchAllProducts = async (): Promise<ShopifyProduct[]> => {
	let allProducts: ShopifyProduct[] = [];
	let hasNextPage = true;
	let cursor: string | null = null;
	let iterationCount = 0; // to track for an infinite loo;

	while (hasNextPage) {
		if (iterationCount >= 10) {
			console.error('Too many iterations, breaking out of loop.');
			break;
		}

		const data: ShopifyProductResponse =
			await shopifyClient.request<ShopifyProductResponse>(PRODUCTS_QUERY, {
				cursor,
			});

		const edges = data.products.edges;
		allProducts.push(...edges.map((edge) => edge.node));

		// Update hasNextPage variable and cursor key for the pagination
		hasNextPage = data.products.pageInfo.hasNextPage;
		cursor = edges.at(-1)?.cursor || null; // Set the cursor to null if it is not there

		// a check to see if the cursor is valid before going further, if not then stop the loop
		if (!cursor) {
			console.warn('No cursor returned. Breaking out of loop.');
			break;
		}

		iterationCount++; // add to the iteration amount to the infinite loop variable
	}

	return allProducts;
};

export const useProducts = () => {
	return useQuery<ShopifyProduct[]>({
		queryKey: ['products'],
		queryFn: fetchAllProducts,
	});
};
