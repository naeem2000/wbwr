import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetailScreen from './app/screens/ProductDetailScreen';
import { colorScheme } from './app/components/utils/constants';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import Constants from 'expo-constants';
import React from 'react';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

// fake status bar for ios only
const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<View
				style={{
					flex: 1,
					backgroundColor: colorScheme !== 'dark' ? '#000' : '#fff',
				}}
			>
				{Platform.OS === 'ios' && (
					<View
						style={{
							height: statusBarHeight,
							backgroundColor: colorScheme === 'dark' ? '#000' : '#fff',
						}}
					/>
				)}

				<StatusBar
					barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
					backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'} // Android only
				/>

				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerTitleAlign: 'center',
						}}
					>
						<Stack.Screen
							name='Home'
							component={HomeScreen}
							options={{ title: 'Vans' }}
						/>
						<Stack.Screen
							name='ProductDetail'
							component={ProductDetailScreen as React.ComponentType<any>}
							options={{ title: 'Product' }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		</QueryClientProvider>
	);
}
