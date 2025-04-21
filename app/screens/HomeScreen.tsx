import { Text, SafeAreaView, ActivityIndicator, Image } from 'react-native';
import { useProducts } from '../components/hooks/useProducts';
import ProductsList from '../components/ProductsList';
import React, { useState } from 'react';
import {
	backgroundImage,
	screenHeight,
	screenWidth,
} from '../components/utils/constants';

type Props = {
	navigation: any;
};

export default function HomeScreen({ navigation }: Props) {
	const { data, isLoading, error, fetchMore, hasMore } = useProducts();
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const handleLoadMore = () => {
		// if there is no more to load and if loading more is true then stop the function
		if (!hasMore || isLoadingMore) return;
		try {
			setIsLoadingMore(true);
			fetchMore();
		} catch (e) {
			console.error(e);
		} finally {
			setIsLoadingMore(false);
		}
	};

	if (isLoading)
		return <ActivityIndicator size={30} style={{ marginTop: 50 }} />;

	if (error)
		return <Text style={{ color: 'red' }}>Error loading products</Text>;

	if (!data || data.length === 0) {
		return <Text>No products available</Text>;
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
			<ProductsList
				navigation={navigation}
				data={data}
				loadMore={handleLoadMore}
				isLoadingMore={isLoadingMore}
			/>
		</SafeAreaView>
	);
}
