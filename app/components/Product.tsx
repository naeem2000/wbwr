import { RouteProp } from '@react-navigation/native';
import { Text } from 'react-native';
import React from 'react';

type Props = {
	route: RouteProp<{ ProductDetail: { product: any } }, 'ProductDetail'>; // Define the type of route params
};
export default function Product({ route }: Props) {
	// getting there products param from the route almost like useparams from nextjs.
	const { product } = route.params;

	console.log(product);
	return <Text> {'<3'}</Text>;
}
