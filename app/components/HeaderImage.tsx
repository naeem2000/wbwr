import { headerStyles } from './utils/styles';
import { headerImg } from './utils/constants';
import React, { RefObject } from 'react';
import {
	Text,
	View,
	FlatList,
	ImageBackground,
	TouchableOpacity,
} from 'react-native';

type Props = {
	listRef: RefObject<FlatList<any>>;
};

export default function HeaderImage({ listRef }: Props) {
	return (
		<ImageBackground
			source={headerImg}
			resizeMode='cover'
			style={headerStyles.headerBg}
		>
			<View style={headerStyles.tintOverlay}>
				<View style={{ margin: 20 }}>
					<Text style={headerStyles.title}>Stick To The Streets</Text>
					<Text style={headerStyles.subheader}>
						Grip the board, own every move.{'\n'}Off the wall, on your own
						terms.
					</Text>
					<TouchableOpacity
						onPress={() => {
							listRef.current?.scrollToOffset({ offset: 300, animated: true });
						}}
					>
						<Text style={headerStyles.headerButton}>Shop now</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
}
