import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';

export class PageLoader extends Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false };
    }

    render() {
        if (this.props.isLoading=='true') {
            return (
                < View style={styles.loadingOverlay} >
                    <Text>Loading...  <ActivityIndicator size="large" color="#0000ff" /></Text>
                </View >
            );
        }
        else
            return (null);
    }
};


export class ApiManager {
    static call = (apiURL, method, data, callback) => {
        const baseUrl = 'http://192.168.1.150:6223/api/' + apiURL;
        fetch(baseUrl, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + global.token,
                'Content-Type': 'application/json'
            },
            body: data
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                callback(responseJson);
            }).done();
    };

    static callForm = (apiURL, method, data, callback) => {
        const baseUrl = 'http://192.168.1.150:6223/api/' + apiURL;

        let formBody = [];
        for (let property in data) {
            let encodedKey = encodeURIComponent(property);
            let encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        fetch(baseUrl, {
            method: method,
            headers: {
                'Authorization': 'Bearer ' + global.token,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                callback(responseJson);
            }).done();
    }
};


const styles = StyleSheet.create({
    loadingOverlay:
    {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',

    }
});
