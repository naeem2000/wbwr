import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import {
	Text,
	Image,
	ScrollView,
	ImageBackground,
	View,
	StyleSheet,
} from 'react-native';
import { ShopifyProduct } from './utils/modules';
import { fallbackImg, productListBg, screenWidth } from './utils/constants';
import { backgroundImageStyles, productDetailStyles } from './utils/styles';
import { BlurView } from 'expo-blur';

type Props = {
	// Define the type of route params almost like the params hook from nextjs
	route: RouteProp<
		{ ProductDetail: { product: ShopifyProduct } },
		'ProductDetail'
	>;
};
export default function Product({ route }: Props) {
	const navigation = useNavigation();
	// getting the products param from the route almost like useparams from nextjs.
	const { product } = route.params;

	useLayoutEffect(() => {
		// set the title of the header for each product displaying on the page
		navigation.setOptions({
			headerTitle: product.title,
		});
	}, [navigation]);

	const imageUrl = product.images.edges[0]?.node.url;

	console.log(product);

	return (
		<ImageBackground
			source={productListBg}
			resizeMode='cover'
			style={backgroundImageStyles.img}
		>
			<ScrollView>
				<View style={productDetailStyles.container}>
					<BlurView
						intensity={40}
						tint='dark'
						style={StyleSheet.absoluteFill}
					/>
					<View style={productDetailStyles.imgContainer}>
						<Image
							resizeMode='contain'
							width={250}
							height={250}
							source={imageUrl ? { uri: imageUrl } : fallbackImg}
						/>
					</View>
					<View style={productDetailStyles.imgRowContainer}>
						{product.images.edges.map((item, index) => {
							return (
								<Image
									key={index}
									resizeMode='contain'
									width={70}
									height={70}
									source={imageUrl ? { uri: item.node.url } : fallbackImg}
								/>
							);
						})}
					</View>
					<Text style={{ color: 'white', marginTop: 30, fontSize: 27 }}>
						{product.title}
					</Text>
					<Text style={{ color: 'white', marginTop: 30, fontSize: 25 }}>
						R{product.variants.edges[0].node.price.amount}
					</Text>
					<Text style={{ color: 'white', marginTop: 30, fontSize: 16 }}>
						{product.description}
					</Text>
				</View>
			</ScrollView>
		</ImageBackground>
	);
}
