import { fallbackImg, removeDecimals } from '../components/utils/constants';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { productDetailStyles } from '../components/utils/styles';
import { ShopifyProduct } from '../components/utils/modules';
import React, { useLayoutEffect, useState } from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import {
	Text,
	View,
	Image,
	Modal,
	ScrollView,
	TouchableOpacity,
} from 'react-native';

type Props = {
	// Define the type of route params almost like the params hook from nextjs
	route: RouteProp<
		{ ProductDetail: { product: ShopifyProduct } },
		'ProductDetail'
	>;
};

export default function Product({ route }: Props) {
	// state for the text to expand or not
	const [isExpanded, setIsExpanded] = useState(false);
	// state to track the selected image index that was pressed
	const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
	// state for the modal
	const [isModalVisible, setIsModalVisible] = useState(false);

	const navigation = useNavigation();

	const { product } = route.params;

	// change the bar text to the product title
	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: product.title,
		});
	}, [navigation, product.title]);

	// Get the initial image URL that is first in the array
	const imageUrl = product.images.edges[0]?.node.url;

	return (
		<ScrollView>
			<View style={productDetailStyles.container}>
				<View style={productDetailStyles.imgContainer}>
					<Image
						resizeMode='contain'
						style={{ width: 250, height: 250 }}
						source={{ uri: imageUrl }}
					/>
				</View>
				<View style={productDetailStyles.imgRowContainer}>
					{product.images.edges.map((item, index) => {
						return (
							<TouchableOpacity
								key={index}
								onPress={() => {
									setSelectedImageIndex(index);
									setIsModalVisible(true);
								}}
							>
								<Image
									resizeMode='contain'
									style={productDetailStyles.rowImage}
									source={item.node.url ? { uri: item.node.url } : fallbackImg}
								/>
							</TouchableOpacity>
						);
					})}
				</View>
				<Modal
					visible={isModalVisible}
					transparent={true}
					onRequestClose={() => setIsModalVisible(false)}
					style={{ position: 'relative' }}
				>
					<TouchableOpacity
						onPress={() => setIsModalVisible(false)}
						style={{
							position: 'absolute',
							zIndex: 2,
							right: 0,
							paddingRight: 30,
							paddingTop: 60,
						}}
					>
						<Text style={{ color: '#FFF', fontSize: 30, fontWeight: 600 }}>
							X
						</Text>
					</TouchableOpacity>
					<ImageViewer
						imageUrls={product.images.edges.map((item) => ({
							url: item.node.url,
						}))}
						index={selectedImageIndex}
						key={product.id}
						onCancel={() => setIsModalVisible(false)}
						enableSwipeDown={true}
						enableImageZoom={true}
					/>
				</Modal>
				<View style={productDetailStyles.titleDescriptionRow}>
					<Text style={productDetailStyles.titleText}>{product.title}</Text>
					<Text style={productDetailStyles.priceText}>
						R{removeDecimals(product.variants.edges[0].node.price.amount)}
					</Text>
				</View>
				<Text style={productDetailStyles.sizesText}>Sizes and colors:</Text>
				<Text style={productDetailStyles.sizes}>
					{product.variants.edges
						.map((item) =>
							item.node.selectedOptions.map((option) => option.value)
						)
						.join(', ')}
				</Text>
				<Text style={productDetailStyles.descriptionText}>
					{isExpanded ? product.description : product.description.slice(0, 200)}
				</Text>
				{product.description.length > 200 && (
					<TouchableOpacity
						onPress={() => {
							setIsExpanded(!isExpanded);
						}}
					>
						<Text
							style={{
								fontWeight: 'bold',
								color: '#000',
								marginTop: 5,
								marginBottom: 10,
							}}
						>
							{isExpanded ? ' Show less' : ' Show more'}
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</ScrollView>
	);
}
