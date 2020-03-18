import React, { useState, Component } from 'react';
import AllTrips from './screens/AllTrips/AllTrips';
import LogIn from './screens/LogIn';
import LogOut from './screens/LogIn';
import Join from './screens/RequestTrip/jointrip';
import RequestaTrip from './screens/RequestTrip/RequestaTrip'
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { Container, Body, Header, Content } from 'native-base';
import * as Font from 'expo-font';
import { DrawerNavigator, DrawerItems } from 'react-navigation';






class App extends Component {

  constructor() {
    super()
    this.state = {
      fontLoaded: true
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
      'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
      'lato-light': require('./assets/fonts/Lato-Light.ttf'),
      'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'gibson-bold': require('./assets/fonts/Gibson-Bold.ttf'),
      'gibson-regular': require('./assets/fonts/Gibson-Regular.ttf'),
      'gibson-semibold': require('./assets/fonts/Gibson-SemiBold.ttf'),
      'gibson-light': require('./assets/fonts/Gibson-Light.ttf'),
    })
    this.setState({ fontLoaded: false });
  }

  render() {
    return (
      <MyApp />
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={{ height: 220, width: "100%", paddingLeft: -5, paddingRight: -5, backgroundColor: 'white' }}>
      <Body>
        <Image
          style={styles.drawerimage}
          source=
          {require('./assets/road-320x480-landscape-blue-sky-iceland-4k-18704.jpg')} />
        <View style={styles.overlay}>
          <Image
            style={styles.profile}
            source={global.user.picUrl} />
          <Text style={styles.name}>{global.user.firstName} {global.user.lastName}</Text>
        </View>
        <View style={styles.redline}></View>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container >
)

const MyApp = DrawerNavigator({


  Trips: {
    screen: AllTrips
  },
  LogOut: {
    screen: LogIn
  },
  RequestaTrip: {
    screen: RequestaTrip
  },
  Join: {
    screen: Join
  },

}, {
  initialRouteName: 'LogOut',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',

})


const styles = StyleSheet.create({
  drawerimage: {
    width: "100%",
    height: "96%",
    position: "relative"
    // marginTop: 10
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "96%",
    backgroundColor: "rgba(6, 9, 8, 0.29)"
  },
  profile: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginLeft: 20,
    marginTop: 50

  },
  name: {
    fontSize: 24,
    fontFamily: 'lato-bold',
    color: "#fff",
    marginLeft: 20,
    marginTop: 10
  },
  redline: {
    height: 8,
    width: "100%",
    backgroundColor: "#EE2125",
    // marginBottom: 8
  }
})


export default App;