import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import GlobalStyles from '../style/Style'
import { App } from '../globals/Global';

export default class MainScreen extends Component {
    static navigationOptions = {
        title: App.title,
    };

    render() {
        return (
            <View style={GlobalStyles.body}>
                <Text>Welcome blabla</Text>
            </View>
        );
    }

}