import { StyleSheet } from 'react-native';
import { itemWidth, screenHeight, screenWidth } from './constants';
import { Colors } from './modules';

const colors: Colors = {
	lightGrey: '#d3d3d3',
	black: '#000000',
	white: '#FFFFFF',
};

const ProductInGridStyles = StyleSheet.create({
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
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	productText: {
		padding: 10,
		backgroundColor: 'colors.lightGrey',
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
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

export const backgroundImageStyles = StyleSheet.create({
	img: {
		height: screenHeight,
		width: screenWidth,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
});

export const productDetailStyles = StyleSheet.create({
	container: {
		padding: 20,
		height: screenHeight,
		width: screenWidth,
	},
	imgContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imgRowContainer: {
		marginTop: 20,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: 10,
		justifyContent: 'space-between',
	},
});

export default ProductInGridStyles;
