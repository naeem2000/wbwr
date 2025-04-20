import { ShopifyProduct } from './utils/modules';
import React from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
	StyleSheet,
} from 'react-native';

interface Props {
	navigation: any;
	data: ShopifyProduct[];
	loadMore: () => void;
	isLoadingMore: boolean;
}

export default function ProductsList({
	data,
	navigation,
	loadMore,
	isLoadingMore,
}: Props) {
	const renderItem = ({
		item,
		index,
	}: {
		item: ShopifyProduct;
		index: number;
	}) => {
		const imageUrl = item.images.edges[0]?.node.url;
		const price = item.variants.edges[0]?.node.price.amount;

		return (
			<TouchableOpacity
				key={index}
				onPress={() => navigation.navigate('ProductDetail', { product: item })}
				style={{ marginBottom: 16 }}
			>
				<Image
					source={{ uri: imageUrl }}
					style={{ width: 100, height: 100, borderRadius: 8 }}
				/>
				<Text>{item.title}</Text>
				<Text style={{ color: 'black' }}>R{price}</Text>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={(_, index) => index.toString()}
			onEndReached={loadMore}
			onEndReachedThreshold={0.5}
			ListFooterComponent={
				isLoadingMore ? <ActivityIndicator style={{ margin: 16 }} /> : null
			}
			contentContainerStyle={ProductItemStyle.container}
		/>
	);
}

const ProductItemStyle = StyleSheet.create({
	container: {
		padding: 16,
	},
});
