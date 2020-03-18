import { createStackNavigator } from 'react-navigation-stack';
import AllTrips from '../screens/AllTrips/AllTrips';
import MyTrips from '../screens/MyTrips/MyTripsUpcoming';
import PastTrips from '../screens/MyTrips/MyTripsPast';
import LogIn from '../screens/LogIn';
import RequestaTrip from '../screens/RequestTrip/RequestaTrip';
import Join from '../screens/RequestTrip/jointrip';
import Header from '../shared/header';
import React from 'react';


const screens = {

    AllTrips: {
        screen: AllTrips
    },
    RequestaTrip: {
        screen: RequestaTrip
    },
    Join: {
        screen: Join
    },

}

const HomeStack = createStackNavigator(screens);

export default HomeStack;