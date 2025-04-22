import HomeScreen from './screens/HomeScreen';
import { ScrollView } from 'react-native';

export default function Index({ navigation }: any) {
	return (
		<ScrollView>
			<HomeScreen navigation={navigation} />
		</ScrollView>
	);
}
