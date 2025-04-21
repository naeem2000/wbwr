import HomeScreen from './screens/HomeScreen';
import { ScrollView, Image } from 'react-native';

export default function Index({ navigation }: any) {
	return (
		<ScrollView>
			<HomeScreen navigation={navigation} />
		</ScrollView>
	);
}
