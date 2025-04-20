import { Button, ScrollView, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function Index({ navigation }: any) {
	return (
		<ScrollView
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<HomeScreen navigation={navigation} />
		</ScrollView>
	);
}
