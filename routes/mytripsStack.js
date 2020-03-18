import { createStackNavigator } from 'react-navigation-stack';

import PastTrips from '../screens/MyTrips/MyTripsPast'; 
import Header from '../shared/header';
import React from 'react'; 

const screens = {   
   
    PastTrips: {
        screen: PastTrips,
       
    },
}

const MyTripsStack = createStackNavigator(screens);

export default MyTripsStack;