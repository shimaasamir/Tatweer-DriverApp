import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AllTrips from '../screens//AllTrips/AllTrips';
import MyTrips from '../screens/MyTrips';
import LogIn from '../screens/LogIn';

const screens = {
    LogIn: {
        screen: LogIn
    },
    AllTrips: {
        screen: AllTrips
    },
    MyTrips: {
        screen: MyTrips
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);