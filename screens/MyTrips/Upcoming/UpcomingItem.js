import React, { useState, Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



// const getLoginAPI = (apiURL, method) => {

//     const baseUrl = 'http://192.168.1.150:6223/api/';
//     console.log('getLoginAPI :: UserName:' + this.state.username);
//     console.log('getLoginAPI :: Password:' + this.state.password);

//     if (this.state.username != '' && this.state.password != '') {

//         let details = {
//             'username': 'ahmed@weelo.com',
//             'password': '123456',
//             'grant_type': 2
//         };

//         let formBody = [];
//         for (let property in details) {
//             let encodedKey = encodeURIComponent(property);
//             let encodedValue = encodeURIComponent(details[property]);
//             formBody.push(encodedKey + "=" + encodedValue);
//         }
//         formBody = formBody.join("&");
//         fetch(baseUrl + apiURL, {
//             method: method,
//             headers: {
//                 'Authorization': 'Bearer token',
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             },
//             body: formBody
//         }).then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson);
//                 this.setState({ access_token: responseJson.access_token });
//                 console.log(this.state.access_token)
//                 global.data = this.state.access_token;
//             }).done();
//     }
// };



// let func = require('../../../routes/api');
// func();
const pressHandler = () => {
    navigation.push('Join');
}

export default class FetchExample extends React.Component {




    render() {
        return (
            <View>
                <Text style={styles.date}>{global.trips.startTime}</Text>
                <View style={styles.container}>
                    <TouchableOpacity  >
                        <View style={styles.box}>
                            <View style={styles.vl}>
                                <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
                                <Text style={styles.pick} >{global.trips.startTime}</Text>
                                <Text style={styles.fresh}>{global.user.firstName}</Text>
                                <View style={styles.gdot}>
                                    <Text style={styles.dot}>.</Text>
                                    <Text style={styles.dot}>.</Text>
                                    <Text style={styles.dot}>.</Text>
                                    <Text style={styles.dot}>.</Text>
                                    <Text style={styles.dot}>.</Text>
                                </View>
                                <View style={styles.hr} ></View>
                                <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
                                <Text style={styles.dest}>{global.user.firstName}</Text>
                                <Text style={styles.home}>{global.user.firstName}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View >
            </View >


        )

    }
}



const styles = StyleSheet.create({
    date: {
        fontFamily: 'gibson-bold',
        fontSize: 12,
        backgroundColor: '#f5f5f5',
        color: '#78849E',
        marginLeft: 24,
        marginTop: 15
    },
    box: {
        backgroundColor: 'white',
        width: 343,
        marginTop: 15,
        borderRadius: 12
    },
    vl: {
        marginLeft: 0
    },
    gdot: {
        marginTop: -27
    },
    dot: {
        marginLeft: 20,
        // marginTop: 10,
        color: '#78849E',
        fontSize: 8
    },
    hr: {
        width: 280,
        height: 1,
        backgroundColor: '#F4F4F6FD',
        marginTop: -10,
        marginBottom: 5,
        marginLeft: 48
    },
    circle: {
        marginLeft: 18,
        marginTop: 7
    },
    pick: {
        fontFamily: 'gibson-regular',
        fontSize: 12,
        color: '#959DAD',
        marginLeft: 40,
        marginTop: -10
    },

    fresh: {
        fontFamily: 'gibson-bold',
        fontSize: 16,
        color: '#454F63',
        marginLeft: 40,
        marginTop: 0
    },
    dest: {
        fontFamily: 'gibson-regular',
        fontSize: 12,
        color: '#959DAD',
        marginLeft: 40,
        marginTop: -15
    },
    home: {
        fontFamily: 'gibson-bold',
        fontSize: 16,
        color: '#454F63',
        marginTop: 0,
        marginLeft: 40

    },
    container: {
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',

    },


})