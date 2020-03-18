import React, { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import TripItem from './TripItem';




export default function Sandbox() {
    const [trips, setTrips] = useState([
        {
            id: '1',
            startPoint: "start Pointe Haram",
            routeName: "haram - october"
        },
        {
            id: '2',
            startPoint: "start Pointe Haram22",
            routeName: "haram - october33"
        },
    ])
    return (
        <View style={styles.container}>
            <FlatList
                data={trips}
                renderItem={({ item }) =>
                    (<TripItem routeName={item.routeName} startPoint={item.startPoint} />)
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f2f2f2'
    },
    one: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
    },
    text: {
        fontFamily: 'lato-regular',
        fontSize: 10,
        marginTop: 12,
        color: '#606060'
    },
    route: {
        fontFamily: 'lato-light',
        fontSize: 10,
        color: '#606060',
        marginLeft: 150
    },
    route1: {
        fontFamily: 'lato-light',
        fontSize: 10,
        color: '#606060',
        marginLeft: 150,
        marginTop: 20
    },
    time: {
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    box: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderColor: '#c9d3dd',
        margin: 8,
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 10
    },
    num: {
        textAlign: 'center',
        fontFamily: 'opensans-bold',
        fontSize: 14
    },
    min: {
        fontFamily: 'opensans-regular',
        fontSize: 12,
        color: '#798da3',
        marginTop: 2,
        marginLeft: 6

    },
    btn: {
        backgroundColor: '#e61610',
        borderRadius: 10,
        width: 100,
        justifyContent: 'center',
        marginLeft: 50,

    }

})