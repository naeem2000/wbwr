import { RouteProp, useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';

type Props = {
	// Define the type of route params almost like the params hook from nextjs
	route: RouteProp<{ ProductDetail: { product: any } }, 'ProductDetail'>;
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

	return (
		<ScrollView>
			<Text>Details for {product.title}</Text>
		</ScrollView>
	);
}
