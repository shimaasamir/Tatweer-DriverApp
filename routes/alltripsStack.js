import { createStackNavigator } from 'react-navigation-stack';
import AllTrips from '../screens/AllTrips/AllTrips';
import Header from '../shared/header';
import React from 'react';


const screens = {
    AllTrips: {
        screen: AllTrips,
        navigationOptions: ({navigation}) => {
            return {
            headerTitle: () => <Header navigation={navigation}/>
        }
        }

    },
}

const AllTripsStack = createStackNavigator(screens);

export default AllTripsStack;