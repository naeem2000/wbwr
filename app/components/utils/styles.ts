import { StyleSheet } from 'react-native';
import { itemWidth } from './constants';
import { Colors } from './modules';

const colors: Colors = {
	lightGrey: '#d3d3d352',
	black: '#000000',
};

export const ProductInGridStyles = StyleSheet.create({
	productContainer: {
		padding: 10,
	},
	item: {
		width: itemWidth,
		margin: 8,
		backgroundColor: colors.lightGrey,
		borderRadius: 10,
	},
	image: {
		width: '100%',
		height: 120,
	},
	productText: {
		padding: 10,
	},
	title: {
		fontSize: 14,
		color: colors.black,
	},
	price: {
		color: colors.black,
		fontWeight: '500',
	},
});
