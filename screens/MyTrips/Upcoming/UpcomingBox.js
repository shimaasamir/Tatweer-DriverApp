import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import UpcomingItem from './UpcomingItem';

const pressHandler = () => {
    navigation.navigate('AllTrips');
}

export default class FetchExample extends React.Component {




    constructor(props) {
        super(props);
        this.state = {
            username: 'ahmed@weelo.com',
            password: '123456',
            isLoading: true
        }

        global.trips = {};
    }
    componentDidMount() {

        return fetch('http://192.168.1.150:6223/api/Trip/GetAllTrips', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer pLaT6H4j14YT3BRt2eWcBIYkd4sv5WVXg1wZNLZnTV4=',
                'Content-Type': 'application/x-www-form-urlencoded'
            },

        }).then((response) => response.json())
            .then((responseJson) => {
                console.log('call API2');
                console.log(responseJson);
                
                // console.log(this.state.trips)
                global.trips = responseJson;
            }).done();
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={global.trips}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={pressHandler} >
                            <UpcomingItem date={item.tripDate} pick={item.tripDate} fresh={item.fresh} dest={item.dest} home={item.home} />
                        </TouchableOpacity>
                    )}
                />

            </View>


        )
    }
}

const styles = StyleSheet.create({
    date: {
        fontFamily: 'gibson-bold',
        fontSize: 12,
        color: '#78849E'
    },
    box: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: 20
    },
    vl: {
        marginLeft: 20
    },
    gdot: {
        marginTop: -27
    },
    dot: {
        marginLeft: 20,

        color: '#78849E4B'
    },
    circle: {
        marginLeft: 20,
        marginTop: 7
    },
    pick: {
        fontFamily: 'gibson-regular',
        fontSize: 12,
        color: '#959DAD',
        marginLeft: 40,
        marginTop: -10
    },
    plus: {
        marginLeft: 300,
        marginTop: -10
    },
    fresh: {
        fontFamily: 'gibson-semibold',
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
        marginTop: -10
    },
    home: {
        fontFamily: 'gibson-semibold',
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