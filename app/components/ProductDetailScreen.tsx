import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import ShopifyProduct from './utils/modules';
import { screenHeight, screenWidth } from './utils/constants';

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

	console.log(product);

	useLayoutEffect(() => {
		// set the title of the header for each product displaying on the page
		navigation.setOptions({
			headerTitle: product.title,
		});
	}, [navigation]);

	const productListBg: string = '../../assets/images/logo-background.jpg';

	return (
		<ScrollView>
			<ImageBackground
				source={require(productListBg)}
				resizeMode='cover'
				style={styles.img}
			>
				<Text>Details for {product.title}</Text>
			</ImageBackground>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	img: {
		height: screenHeight,
		width: screenWidth,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
});
