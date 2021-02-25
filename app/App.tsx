/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Schedule} from './schedule';
import {Direction} from './direction';

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Schedule">
                <Tab.Screen name="Timings" component={Schedule} />
                <Tab.Screen name="Qibla Direction" component={Direction} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
