import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { ShopifyProduct } from './utils/modules';

interface Props {
	navigation: any;
	data: ShopifyProduct[];
}

export default function ProductsList({ data, navigation }: Props) {
	return (
		<View style={ProductItemStyle.container}>
			{data.map((item, index) => {
				const imageUrl = item.images.edges[0]?.node.url;

				return (
					<TouchableOpacity key={index} onPress={() => console.log(index)}>
						<Image
							source={{ uri: imageUrl }}
							style={{ width: 100, height: 100, borderRadius: 8 }}
						/>
						<Text>{item.title}</Text>
						<Text style={{ color: 'black' }}>
							{item.variants.edges[0].node.price.amount}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const ProductItemStyle = StyleSheet.create({
	container: {
		flex: 2,
	},
});
