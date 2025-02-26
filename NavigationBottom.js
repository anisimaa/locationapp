import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HOME = 'Home';
const MESSAGES = 'Messages';
const SETTINGS = 'Settings';
const icons = {
    [HOME]: 'home',
    [MESSAGES]: 'message1',
    [SETTINGS]: 'setting'
}

export default function BottomNav() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={HOME} component={HomeScreen}></Tab.Screen>
                <Tab.Screen name={MESSAGES} component={MessagesScreen}></Tab.Screen>
                <Tab.Screen name={SETTINGS} component={SettingsScreen}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
}