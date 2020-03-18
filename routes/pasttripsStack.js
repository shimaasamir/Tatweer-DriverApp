import { createStackNavigator } from 'react-navigation-stack';
import MyTrips from '../screens/MyTrips/MyTripsPast'; 
import Header from '../shared/header';
import React from 'react'; 

const screens = {   
    MyTrips: {
        screen: MyTrips,
       
    },
}

const MyTripsStack = createStackNavigator(screens);

export default MyTripsStack;