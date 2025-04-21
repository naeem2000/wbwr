import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetailScreen from './app/components/ProductDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StyleSheet } from 'react-native';
import ProductScreen from './app/screens/ProductScreen';
import HomeScreen from './app/screens/HomeScreen';
import { colorScheme, backgroundImage } from './app/components/utils/constants';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<ImageBackground
				source={backgroundImage}
				style={styles.background}
				resizeMode='cover'
			>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerTitleAlign: 'center',
							statusBarBackgroundColor:
								colorScheme === 'dark' ? '#fff' : '#000',
						}}
					>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{ title: 'Vans', headerTitleAlign: 'center' }}
						/>
						<Stack.Screen
							name='Product'
							component={ProductScreen}
							options={{ title: 'Product' }}
						/>
						<Stack.Screen
							name='ProductDetail'
							component={ProductDetailScreen as React.ComponentType<any>}
							options={{ title: 'Product' }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</ImageBackground>
		</QueryClientProvider>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		width: '100%',
		height: '100%',
	},
});
