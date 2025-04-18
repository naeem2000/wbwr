import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default function TabTwoScreen() {
	return (
		<SafeAreaView>
			<Text style={styles.text}>about</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	text: {
		color: 'red',
	},
});
