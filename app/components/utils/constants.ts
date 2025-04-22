import { Appearance, Dimensions } from 'react-native';

// screen heights
export const screenWidth: number = Dimensions.get('window').width;
export const screenHeight: number = Dimensions.get('window').height;

export const numColumns: number = 2;
export const spacing: number = 16;
export const itemWidth: number =
	(screenWidth - spacing * (numColumns + 1)) / numColumns;

export const productListBg = require('../../../assets/images/logo-background.jpg');

export const fallbackImg = require('../../../assets/images/no-image-available.jpg');

export const headerImg = require('../../../assets/images/header.webp');

export const colorScheme = Appearance.getColorScheme();

// take out the strings in the array befoer the .
export const removeDecimals = (price: string) => price?.split?.('.')[0] ?? '';
