import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import GlobalStyles from '../style/Style'
import I18n from '../locales/i18n';

export default class Login extends Component {
    static navigationOptions = {
        title : 'KKoozzyy!!',
    };

    constructor(props) {
        super(props);
        this.state = {
            usernamePlaceHolder: 'Username',
            passwordPlaceHolder: 'Password',
            buttonTitle : 'ok'
        };
    }

    loginAction() {
        //Alert.alert('Button has been pressed!');

    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={GlobalStyles.body}>
                <Text style={GlobalStyles.title}>
                    LOGIN
                </Text>
                <TextInput
                    style={GlobalStyles.input}
                    returnKeyType="next"
                    keyboardType="email-address"
                    placeholder={I18n.t('username')}
                />
                <TextInput
                    style={GlobalStyles.input}
                    returnKeyType="go"
                    secureTextEntry
                    placeholder={I18n.t('password')}
                />
                <TouchableOpacity
                    onPress={() => navigate('MainScreen')}
                >
                    <Text style={GlobalStyles.button} >
                        {I18n.t('login')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
