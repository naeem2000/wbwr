import { ShopifyProductResponse } from '@/constants/modules';
import { useQuery } from '@tanstack/react-query';
import { shopifyClient } from './ShopifyClient';
import { PRODUCTS_QUERY } from './queries';

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
