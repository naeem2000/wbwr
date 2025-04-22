import { ShopifyProduct, ShopifyProductResponse } from '../utils/modules';
import { useState, useEffect, useCallback } from 'react';
import { shopifyClient } from '../utils/ShopifyClient';
import { PRODUCTS_QUERY } from '../utils/queries';

export const useProducts = () => {
	// the products
	const [products, setProducts] = useState<ShopifyProduct[]>([]);
	// storing the pagination token
	const [cursor, setCursor] = useState<string | null>(null);
	// loading the data
	const [isLoading, setIsLoading] = useState(true);
	// loading more data
	const [isLoadingMore, setIsLoadingMore] = useState(false);
	// knowing if it must load more
	const [hasMore, setHasMore] = useState(true);
	// errors
	const [error, setError] = useState<Error | null>(null);

	// a callback to prevent it from being recreated on all renders
	const fetchProducts = useCallback(
		async (nextCursor: string | null = null) => {
			try {
				const {
					// destructuring to get specific items
					products: { edges, pageInfo },
				}: // making a response
				ShopifyProductResponse = await shopifyClient.request(
					PRODUCTS_QUERY,
					{ cursor: nextCursor }
					// placing items where i was destrucuring
				);

				// mapping items in a variable
				const newProducts = edges.map((edge) => edge.node);
				setProducts((prev) => [...prev, ...newProducts]);
				setHasMore(pageInfo.hasNextPage);
				// getting the last item in the array for pagination
				setCursor(edges.at(-1)?.cursor || null);
			} catch (err) {
				setError(err as Error);
			} finally {
				// set all loading to false
				setIsLoading(false);
				setIsLoadingMore(false);
			}
		},
		[]
	);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	const fetchMore = () => {
		// if there is more data and loading state is false then get more based on the cursor value
		if (hasMore && !isLoadingMore) {
			setIsLoadingMore(true);
			fetchProducts(cursor);
		}
	};

	return {
		data: products,
		isLoading,
		isLoadingMore,
		hasMore,
		error,
		fetchMore,
		fetchProducts,
	};
};
