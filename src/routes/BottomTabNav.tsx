import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { AboutScreen } from '../screens/About/AboutScreen';
import { VirusScreen } from '../screens/Virus/VirusScreen';
import { StackNavigator } from './StackNavigator';
import { colours } from '../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colours.primary,
                tabBarActiveTintColor: colours.letters,
                tabBarInactiveTintColor: colours.primary,
                headerShown: false,
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                    backgroundColor: colours.letters,
                }
            }}
        >
            <Tab.Screen name='TabHome' options={{ title: 'Home', tabBarIcon: ({ color }) => (<Icon name='home-outline' size={25} color={color} />) }} component={HomeScreen} />
            <Tab.Screen name='TabVirus' options={{ title: 'Escanear', tabBarIcon: ({ color }) => (<Icon name='scan-circle-outline' size={25} color={color} />) }} component={VirusScreen} />
            {/* <Tab.Screen name='TabAbout' component={AboutScreen} /> */}
        </Tab.Navigator>
    )
}
