import { itemWidth, screenWidth } from './constants';
import { StyleSheet } from 'react-native';
import { Colors } from './modules';

const colors: Colors = {
	lightGrey: '#E2E2E2',
	black: '#000000',
	white: '#FFFFFF',
};

const ProductInGridStyles = StyleSheet.create({
	productContainer: {
		padding: 0,
	},
	item: {
		width: itemWidth,
		margin: 14,
		borderRadius: 10,
		boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.10)',
	},
	image: {
		width: '100%',
		height: 120,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
	},
	productText: {
		display: 'flex',
		padding: 10,
		backgroundColor: colors.lightGrey,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
	},
	title: {
		fontSize: 14,
		color: colors.black,
	},
	price: {
		color: colors.black,
		fontWeight: 500,
	},
});

export const productDetailStyles = StyleSheet.create({
	container: {
		padding: 20,
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
		justifyContent: 'center',
	},
	titleDescriptionRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	titleText: {
		color: colors.black,
		fontSize: 20,
		marginTop: 30,
		width: screenWidth / 2,
		fontWeight: 600,
	},
	descriptionText: {
		marginTop: 30,
		color: colors.black,
		fontSize: 14,
	},
	priceText: {
		color: colors.black,
		marginTop: 30,
		fontWeight: 700,
		fontSize: 30,
	},
	sizesText: {
		color: colors.black,
		marginTop: 30,
		fontSize: 18,
		fontWeight: 600,
	},
	sizes: {
		color: colors.black,
		marginTop: 0,
		fontSize: 16,
	},
	rowImage: {
		width: 70,
		height: 70,
	},
});

export const headerStyles = StyleSheet.create({
	headerBg: {
		width: '100%',
		height: 300,
		display: 'flex',
		alignContent: 'flex-end',
		justifyContent: 'flex-end',
	},
	headerButton: {
		textAlign: 'center',
		color: colors.white,
		paddingVertical: 10,
		fontSize: 20,
		backgroundColor: colors.black,
		width: 170,
		borderRadius: 10,
	},
	title: {
		fontSize: 32,
		fontWeight: 600,
		color: colors.white,
	},
	subheader: {
		fontSize: 18,
		fontWeight: 300,
		marginVertical: 10,
		fontStyle: 'italic',
		color: colors.white,
	},
	tintOverlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		width: '100%',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
	},
});

export default ProductInGridStyles;
