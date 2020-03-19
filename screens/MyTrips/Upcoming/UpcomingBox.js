import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import UpcomingItem from './UpcomingItem';
import { ApiManager, PageLoader } from '../../../shared/ApiManager';
const pressHandler = () => {
    navigation.navigate('AllTrips');
}

export default class FetchExample extends React.Component {




    constructor(props) {
        super(props);
        global.trips = {};
        this.state = {
            username: 'ahmed@weelo.com',
            password: '123456',
            dataSource: global.trips
        }


    }
    componentDidMount() {

        return ApiManager.call('Trip/GetAllTrips', 'GET', null, function (response) {
            global.trips = response;
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={item => item.id}
                    data={this.state.dataSource}
                    renderItem={({ item }) => (

                        <UpcomingItem tripDate={item.tripDate} pick={item.tripDate} fresh={item.fresh} dest={item.dest} home={item.home} />

                    )}
                    keyExtractor={({ id }, index) => id}
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