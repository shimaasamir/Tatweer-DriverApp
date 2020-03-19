import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';




export default function PastItem(props) {


    return (

        <View>
            <Text style={styles.date}>{props.date}</Text>
        
        <View style={styles.container}>
            

            <View style={styles.box}>
                <View style={styles.vl}>
                    <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
                    <Text style={styles.pick} >{props.pick}</Text>
                    <Text style={styles.fresh}>{props.fresh}</Text>
                    <View style={styles.gdot}>
                        <Text style={styles.dot}>.</Text>
                        <Text style={styles.dot}>.</Text>

                        <Text style={styles.dot}>.</Text>
                        <Text style={styles.dot}>.</Text>
                        <Text style={styles.dot}>.</Text>
                    </View>
                    <View style={styles.hr} ></View>
                    <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
                    <Text style={styles.dest}>{props.dest}</Text>
                    <Text style={styles.home}>{props.home}</Text>
                </View>
            </View>

        </View>
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
        justifyContent: 'center',
        alignItems: 'center'

    },


})