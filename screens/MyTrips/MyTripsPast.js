import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import PastBox from './Past/PastBox';

export default function PastTrips({ navigation }) {
    const pressHandler = () => {
        navigation.navigate('MyTrips');
    }

    return (


        <View style={styles.container}>
            <PastBox />
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingTop: 20,
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