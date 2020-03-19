import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import PastItem from './PastItem';




export default function Sandbox(props) {

    const pressHandler = () => {

        navigation.push('RequestaTrip');
    }
    const [trips] = useState([
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
    ])

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={trips}
                renderItem={({ item }) => (
                    <PastItem onPress={props.onPress} date={item.date} pick={item.pick} fresh={item.fresh} dest={item.dest} home={item.home} />
                )}
            />

        </View>


    )
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
  
    },
  
  
  })