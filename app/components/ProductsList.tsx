import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import { ShopifyProduct } from './utils/modules';

interface Props {
	products: ShopifyProduct[];
}

export default function ProductsList({ products }: Props) {
	return (
		<ScrollView contentContainerStyle={{ padding: 16 }}>
			{products.map((product, index) => {
				const imageUrl = product.images?.edges?.[0]?.node?.url;

				return (
					<View key={index} style={{ marginBottom: 20 }}>
						{imageUrl ? (
							<Image
								source={{ uri: imageUrl }}
								style={{ width: 100, height: 100, borderRadius: 8 }}
							/>
						) : (
							<Text style={{ fontStyle: 'italic' }}>No image available</Text>
						)}
						<Text style={{ fontSize: 18, fontWeight: 'bold' }}>
							{product.title}
						</Text>
						<Text>{product.description || 'No description'}</Text>
						<Text style={{ color: 'blue' }}>
							{imageUrl ? `Image: ${imageUrl}` : 'No image URL'}
						</Text>
					</View>
				);
			})}
		</ScrollView>
	);
}
