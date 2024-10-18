import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { AboutScreen } from '../screens/About/AboutScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { BottomTabNav } from './BottomTabNav';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Tabs' component={BottomTabNav} />
            {/* <Stack.Screen name='Home' component={HomeScreen} /> */}
            <Stack.Screen options={{ headerShown: true, headerTitle: 'Contacto' }} name='About' component={AboutScreen} />
        </Stack.Navigator>
    );
}