import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'
import GlobalStyles from '../style/Style'
import I18n from '../locales/i18n';
import { App, Api } from '../globals/Global';

export default class Login extends Component {
    static navigationOptions = {
        title : App.title,
    };

    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: 'admin',
        };
    }

    loginAction() {
        const { navigate } = this.props.navigation;
        try {
            const u = encodeURIComponent(this.state.username);
            const p = encodeURIComponent(this.state.password);
            fetch(Api.login, {
                method: 'POST',
                headers: {
                    'cache-control': 'no-cache',
                    'Content-Type' : 'application/x-www-form-urlencoded',
                },
                body: `_username=${u}&_password=${p}`
            }).then((response) =>
                response.json()
            ).then((response) => {
                if(response.token) {
                    AsyncStorage.setItem('@KZStore:token', response.token)
                        .then(() => navigate('UsersList'));
                }else {
                    navigate('Login');
                }
            }).catch((error) => {
                console.error(error);
                navigate('Login');
            });
        } catch(error) {
            console.error(error);
            navigate('Login');
        }
    }

    render() {
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
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <TextInput
                    style={GlobalStyles.input}
                    returnKeyType="go"
                    secureTextEntry
                    placeholder={I18n.t('password')}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <TouchableOpacity
                    onPress={() => this.loginAction()}
                >
                    <Text style={GlobalStyles.button} >
                        {I18n.t('login')}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
