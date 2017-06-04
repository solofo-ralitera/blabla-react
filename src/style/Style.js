import React from 'react';
import { StyleSheet } from 'react-native'

const GlobalStyles = StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : 'skyblue',
        padding : 10,
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
        padding : 10,
        marginVertical : 5,
        color : 'darkblue',
        backgroundColor : '#2980b9',
    }
});

export default GlobalStyles;
