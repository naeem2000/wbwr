import { numColumns, fallbackImg } from './utils/constants';
import React, { useCallback, useState } from 'react';
import ProductInGridStyles from './utils/styles';
import ShopifyProduct from './utils/modules';
import {
	View,
	Text,
	Image,
	FlatList,
	RefreshControl,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onRefresh = useCallback(() => {
		setIsRefreshing(true);

		loadMore();
		setTimeout(() => {
			setIsRefreshing(false);
		}, 2000);
	}, []);

	const renderItem = ({ item }: { item: ShopifyProduct; index: number }) => {
		const imageUrl = item.images.edges[0]?.node.url;
		const price = item.variants.edges[0]?.node.price.amount;

		async function onPress() {
			// set the title in the local storage
			await AsyncStorage.setItem('productTitle', item.title);
			//then navigate
			navigation.navigate('ProductDetail', { product: item });
		}

		return (
			<TouchableOpacity
				onPress={() => onPress()}
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
					<Text style={ProductInGridStyles.price}>R{price}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<FlatList
			data={data}
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
