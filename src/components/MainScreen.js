import React, { Component } from 'react'
import {
    View,
    Text,
} from 'react-native'
import GlobalStyles from '../style/Style'

export default class MainScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={GlobalStyles.body}>
                <Text>Welcome blabla</Text>
            </View>
        );
    }

}