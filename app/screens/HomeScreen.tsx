import {
	ActivityIndicator,
	Text,
	SafeAreaView,
	ScrollView,
} from 'react-native';
import { useProducts } from '../components/hooks/useProducts';
import { ShopifyProduct } from '../components/utils/modules';
import ProductsList from '../components/ProductsList';
import React from 'react';

type Props = {
	navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
	const { data, isLoading, error } = useProducts();

	if (isLoading) return <ActivityIndicator style={{ marginTop: 50 }} />;

	if (error)
		return <Text style={{ color: 'red' }}>Error loading products</Text>;

	if (!data || data.length === 0) {
		return <Text>No products available</Text>;
	}
	return (
		<ScrollView>
			<SafeAreaView>
				<ProductsList navigation={navigation} data={data as ShopifyProduct[]} />
			</SafeAreaView>
		</ScrollView>
	);
}
