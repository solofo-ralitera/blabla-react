import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Alert,
    StyleSheet,
    TouchableOpacity,
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
            <View style={styles.container}>
                <Text style={styles.title}>
                    LOGIN
                </Text>
                <TextInput
                    style={styles.input}
                    returnKeyType="next"
                    keyboardType="email-address"
                    placeholder={this.state.usernamePlaceHolder}
                />
                <TextInput
                    style={styles.input}
                    returnKeyType="go"
                    secureTextEntry
                    placeholder={this.state.passwordPlaceHolder}
                />
                <TouchableOpacity
                    onPress={loginAction}
                >
                    <Text style={styles.button} >
                        OK
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'skyblue',
        paddingHorizontal : 50,
        paddingTop: 100
    },
    title : {
        textAlign : 'center',
        fontWeight : 'bold',
    },
    input : {
        backgroundColor : 'powderblue',
        marginVertical : 5,
    },
    button : {
        textAlign : 'center',
        padding : 5,
        marginTop: 10,
        color : 'darkblue',
        backgroundColor : '#2980b9',
    }
});