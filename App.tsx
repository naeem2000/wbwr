import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './app/screens/HomeScreen';
import ProductScreen from './app/screens/ProductScreen';
import ProductDetailScreen from './app/components/ProductDetailScreen';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<Stack.Navigator>
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
		</QueryClientProvider>
	);
}
