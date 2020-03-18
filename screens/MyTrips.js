import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function MyTrips({navigation}) {

    const pressHandler = () => {
        navigation.goBack();
    }


    return (
        <View style={globalStyles.container}>
            <Text>MyTrips Screen</Text>
            <Button title='back to log in' onPress={pressHandler}/>
        </View>
    )
}
