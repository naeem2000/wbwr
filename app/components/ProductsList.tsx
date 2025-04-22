import { numColumns, fallbackImg, removeDecimals } from './utils/constants';
import React, { useCallback, useRef, useState } from 'react';
import ProductInGridStyles from './utils/styles';
import { ShopifyProduct } from './utils/modules';
import {
	View,
	Text,
	Image,
	FlatList,
	RefreshControl,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import HeaderImage from './HeaderImage';

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
	// state for refreshing to show the loader
	const [isRefreshing, setIsRefreshing] = useState(false);

	const listRef = useRef<FlatList>(null);

	// function to reload
	const onRefresh = useCallback(() => {
		setIsRefreshing(true);
		loadMore();
		setTimeout(() => {
			setIsRefreshing(false);
		}, 2000);
	}, [loadMore]);

	// single item component
	const renderItem = ({ item }: { item: ShopifyProduct; index: number }) => {
		const imageUrl = item.images.edges[0]?.node.url;
		const price = item.variants.edges[0]?.node.price.amount;
		return (
			<TouchableOpacity
				onPress={() => navigation.navigate('ProductDetail', { product: item })}
				style={ProductInGridStyles.item}
			>
				<Image
					source={imageUrl ? { uri: imageUrl } : fallbackImg}
					style={ProductInGridStyles.image}
					resizeMode='cover'
				/>
				<View style={ProductInGridStyles.productText}>
					<Text numberOfLines={1} style={ProductInGridStyles.title}>
						{item.title}
					</Text>
					<Text style={ProductInGridStyles.price}>
						R{removeDecimals(price)}
					</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			// note: this is a useful prop
			ListHeaderComponent={<HeaderImage listRef={listRef || null} />}
			ref={listRef}
			data={data}
			scrollsToTop={true}
			renderItem={renderItem}
			numColumns={numColumns}
			keyExtractor={(_, index) => index.toString()}
			onEndReached={loadMore}
			onEndReachedThreshold={0.5}
			ListFooterComponent={
				isLoadingMore ? <ActivityIndicator style={{ margin: 16 }} /> : null
			}
			contentContainerStyle={ProductInGridStyles.productContainer}
			refreshControl={
				<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
			}
		/>
	);
}
