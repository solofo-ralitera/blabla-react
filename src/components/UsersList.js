import React, { Component } from 'react'
import {
    ListView,
    Text,
    ActivityIndicator,
    AsyncStorage,
} from 'react-native'
import GlobalStyles from '../style/Style'
import { App, Api } from '../globals/Global';
import { UserItem } from './User/UserItem';

export default class UsersList extends Component {
    static navigationOptions = {
        title: App.title,
    };

    constructor(props) {
        super(props);
        this.state = {
            users: null,
        };
        this.getUsers();
    }

    async getUsers() {
        const token = await AsyncStorage.getItem('@KZStore:token');
        fetch(Api.users, {
            method: 'GET',
            headers: {
                'Authorization' : 'Bearer ' + token,
            }
        }).then((response) =>
            response.json()
        ).then((response) => {
            this.setState({users : response.data});
        }).catch((error) => {
            console.error(error);
        });
    }

    render() {
        if(this.state.users === null) {
            return (
                <ActivityIndicator  style={GlobalStyles.body} />
            );
        }else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.name !== r2.name});
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.users)}
                    renderRow={(row) => <UserItem user={row} />}
                    //initialListSize=""
                    //onEndReachedThreshold=""
                    //pageSize=""
                    //renderScrollComponent=""
                    //scrollRenderAheadDistance=""
                    //stickyHeaderIndices=""
                />
            );
        }
    }

}