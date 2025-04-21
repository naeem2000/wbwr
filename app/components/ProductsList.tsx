import { ShopifyProduct } from './utils/modules';
import React, { useCallback, useState } from 'react';
import {
	Text,
	Image,
	FlatList,
	StyleSheet,
	View,
	TouchableOpacity,
	ActivityIndicator,
	Dimensions,
	RefreshControl,
} from 'react-native';
import { useProducts } from './hooks/useProducts';

interface Props {
	navigation: any;
	data: ShopifyProduct[];
	loadMore: () => void;
	isLoadingMore: boolean;
}

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const spacing = 16;
const itemWidth = (screenWidth - spacing * (numColumns + 1)) / numColumns;

export default function ProductsList({
	data,
	navigation,
	loadMore,
	isLoadingMore,
}: Props) {
	const { fetchMore } = useProducts();

	const [isRefreshing, setIsRefreshing] = useState(false);
	const renderItem = ({ item }: { item: ShopifyProduct; index: number }) => {
		const imageUrl = item.images.edges[0]?.node.url;
		const price = item.variants.edges[0]?.node.price.amount;

		return (
			<TouchableOpacity
				onPress={() => navigation.navigate('ProductDetail', { product: item })}
				style={ProductGridStyles.item}
			>
				<Image
					source={{ uri: imageUrl }}
					style={ProductGridStyles.image}
					resizeMode='cover'
				/>
				<View style={ProductGridStyles.productText}>
					<Text numberOfLines={1} style={ProductGridStyles.title}>
						{item.title}
					</Text>
					<Text style={ProductGridStyles.price}>R{price}</Text>
				</View>
			</TouchableOpacity>
		);
	};
	const onRefresh = useCallback(() => {
		setIsRefreshing(true);

		fetchMore();
		setTimeout(() => {
			setIsRefreshing(false);
		}, 2000);
	}, []);

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			numColumns={numColumns}
			keyExtractor={(item, index) => item.id ?? index.toString()}
			onEndReached={loadMore}
			onEndReachedThreshold={0.5}
			ListFooterComponent={
				isLoadingMore ? <ActivityIndicator style={{ margin: 16 }} /> : null
			}
			contentContainerStyle={ProductGridStyles.productContainer}
			refreshControl={
				<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
			}
		/>
	);
}

const ProductGridStyles = StyleSheet.create({
	productContainer: {
		padding: 10,
		backgroundColor: '#FFF',
	},
	item: {
		width: itemWidth,
		margin: 8,
		backgroundColor: '#d3d3d352',
		borderRadius: 10,
	},
	image: {
		width: '100%',
		height: 120,
		borderRadius: 8,
		backgroundColor: '#f0f0f0',
	},
	productText: {
		padding: 10,
	},
	title: {
		fontSize: 14,
		color: '#333',
	},
	price: {
		color: '#000',
		fontWeight: '500',
	},
});
