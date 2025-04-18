import { ActivityIndicator, Text, SafeAreaView } from 'react-native';
import { useProducts } from '@/components/utils/useProducts';
import ProductList from '@/components/ProductList';
import React from 'react';

export default function ShopifyScreen() {
	const { data, isLoading, error } = useProducts();
	const products = data?.products.edges.map((edge) => edge.node) ?? [];

	if (isLoading) return <ActivityIndicator style={{ marginTop: 50 }} />;
	if (error)
		return <Text style={{ color: 'red' }}>Error loading products</Text>;

	return (
		<SafeAreaView>
			<ProductList products={products} />
		</SafeAreaView>
	);
}
