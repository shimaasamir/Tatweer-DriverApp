import React, { Component } from 'react';
import { StyleSheet, Alert, KeyboardAvoidingView, View, ImageBackground, TextInput, Button, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';


export default class LogIn extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         username: ,
    //         password: '123456'
    //     }
    //     global.data = "";
    //     global.getLoginAPI = getLoginAPI(apiURL, method)

    // }
    // onChangeText1 = (username) => {
    //     this.setState({ username });
    //     return;
    // }
    // onChangeText2 = (password) => {
    //     this.setState({ password });
    //     return;
    // }
    getLoginAPI = (apiURL, method) => {

        const baseUrl = 'http://192.168.1.150:6223/api/';
        console.log('getLoginAPI :: UserName:' + this.state.username);
        console.log('getLoginAPI :: Password:' + this.state.password);

        if (this.state.username != '' && this.state.password != '') {

            let details = {
                'username': 'ahmed@weelo.com',
                'password': '123456',
                'grant_type': 2
            };

            let formBody = [];
            for (let property in details) {
                let encodedKey = encodeURIComponent(property);
                let encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
            fetch(baseUrl + apiURL, {
                method: method,
                headers: {
                    'Authorization': 'Bearer token',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: formBody
            }).then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson);
                    this.setState({ access_token: responseJson.access_token });
                    console.log(this.state.access_token)
                    global.data = this.state.access_token;
                }).done();
        }
    };

}





