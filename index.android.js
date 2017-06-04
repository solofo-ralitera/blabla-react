/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
} from 'react-native';
import {StackNavigator} from 'react-navigation'
import Login from './src/components/Login'
import MainScreen from './src/components/MainScreen'

const blablareact = StackNavigator({
    Login : { screen: Login },
    MainScreen : { screen: MainScreen },
});

AppRegistry.registerComponent('blablareact', () => blablareact);
