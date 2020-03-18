import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, ActivityIndicator, View, ImageBackground, TextInput, Button } from 'react-native';
import PasswordField from 'react-native-password-field';

export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('http://192.168.1.99:5252/api/login', {
            method: 'POST',
            body: JSON.stringify({
                username: "m.hefny@weelo.com.eg",
                password: "123456",
                grant_type: "1"
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson.movies,
                }, function () {

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }


    render() {

        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: 30 }}>
                    <ActivityIndicator />
                </View>
            )
        }
    }
}


const pressHandler = () => {
    // navigation.navigate('AllTrips');
    navigation.push('AllTrips');
}
const loading = {
    isLoading: false
};
function getMoviesFromApiAsync() {
    loading.isLoading = true

    return fetch('http://192.168.1.150:6223/api/token', {
        method: 'POST',
        body: JSON.stringify({
            username: "m.hefny@weelo.com.eg",
            password: "123456",
            grant_type: "1"
        }),
    }).then((response) => {
        response.json()
        loading.isLoading = false
        navigation.navigate('Join', response);
        console.log(response.json())
    }).then((responseJson) => {
        return responseJson;
    }).catch((error) => {
        console.error(error);
    });
}