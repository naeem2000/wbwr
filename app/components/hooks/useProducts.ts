import { useQuery } from '@tanstack/react-query';
import { ShopifyProductResponse } from '../utils/modules';
import { PRODUCTS_QUERY } from '../utils/queries';
import { shopifyClient } from '../utils/ShopifyClient';

export const useProducts = () => {
	return useQuery<ShopifyProductResponse>({
		queryKey: ['products'],
		queryFn: async (): Promise<ShopifyProductResponse> => {
			try {
				const data = await shopifyClient.request<ShopifyProductResponse>(
					PRODUCTS_QUERY
				);
				console.log('data:', JSON.stringify(data, null, 2));
				return data;
			} catch (error) {
				console.error('error:', JSON.stringify(error, null, 2));
				throw error;
			}
		},
	});
};
