import React from 'react';
import { ActivityIndicator, Button, SafeAreaView, Text } from 'react-native';
import { useProducts } from '../components/hooks/useProducts';
import ProductsList from '../components/ProductsList';

type Props = {
	navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
	const { data, isLoading, error } = useProducts();
	const products =
		data?.products.edges.map((edge: { node: any }) => edge.node) ?? [];

	if (isLoading) return <ActivityIndicator style={{ marginTop: 50 }} />;
	if (error)
		return <Text style={{ color: 'red' }}>Error loading products</Text>;

	return (
		<SafeAreaView>
			<Button
				title='Go to Product'
				onPress={() => navigation.navigate('Product', { name: 'Jane' })}
			/>
			<ProductsList products={products} />
		</SafeAreaView>
	);
}
