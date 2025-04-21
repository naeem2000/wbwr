import { Button, ScrollView, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function Index({ navigation }: any) {
	return (
		<ScrollView>
			<HomeScreen navigation={navigation} />
		</ScrollView>
	);
}
