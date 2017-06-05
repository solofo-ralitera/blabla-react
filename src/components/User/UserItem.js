import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

//import GlobalStyles from '../../style/Style'

export class UserItem extends Component {
    static propTypes = {
        user : React.PropTypes.object,
        avatar : React.PropTypes.object,
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.user.avatar}}
                />
                <Text>{this.props.user.name}</Text>
            </View>
        )
    }
}
