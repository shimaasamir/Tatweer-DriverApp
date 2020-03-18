import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import UpcomingBox from './Upcoming/UpcomingBox';


export default function UpcomingTrips({ navigation }) {


    const pressHandler = () => {
        navigation.push('RequestaTrip');
    }
    return (


        <View style={styles.container}>
            <UpcomingBox onPress={pressHandler} />
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 20,
        backgroundColor: '#f5f5f5'
    },
    upcoming: {
        borderWidth: 1,
        width: 130,
        marginLeft: 48,
        borderRadius: 20
    },
    past: {
        borderWidth: 1,
        width: 130,
        marginLeft: 180,
        marginTop: -38,
        borderRadius: 20
    },
})