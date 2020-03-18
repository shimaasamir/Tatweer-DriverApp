import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import UpcomingItem from './UpcomingItem';



export default function Sandbox({ navigation }) {

    const pressHandler = () => {
        navigation.navigate('AllTrips');
    }

    const [trips, setTrips] = useState([
        {
            id: '1',
            date: "JAN 10 - 12:30 PM",
            pick: "Pickup Location",
            fresh: "Fresh Market",
            dest: "Destination Location",
            home: "My Home"

        },
        {
            id: '2',
            date: "JAN 10 - 12:30 PM",
            pick: "Pickup Location",
            fresh: "Super Playstore Ground",
            dest: "Destination Location",
            home: "My Home"
        },
        {
            id: '3',
            date: "JAN 10 - 12:30 PM",
            pick: "Pickup Location",
            fresh: "Fresh Market",
            dest: "Destination Location",
            home: "My Home"
        },
    ]);


    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={trips}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={pressHandler} >
                        <UpcomingItem date={item.date} pick={global.user.firstName} fresh={item.fresh} dest={item.dest} home={item.home} />
                    </TouchableOpacity>
                )}
            />

        </View>


    )
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