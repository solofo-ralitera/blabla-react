import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native'

const loginAction = () => {
    Alert.alert('Button has been pressed!');
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernamePlaceHolder: 'Username',
            passwordPlaceHolder: 'Password',
            buttonTitle : 'ok'
        };

    }

    render() {
        return (
            <View>
                <Text>LOGIN</Text>
                <TextInput
                    value={this.state.usernamePlaceHolder}
                />
                <TextInput
                    value={this.state.passwordPlaceHolder}
                />
                <Button
                    title={this.state.buttonTitle}
                    onPress={loginAction}
                />
            </View>
        )
    }
}