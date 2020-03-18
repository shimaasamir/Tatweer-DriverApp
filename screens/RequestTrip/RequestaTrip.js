import React, { Component } from "react";
import { Text, Button, StyleSheet, Dimensions, TouchableOpacity, View, Image } from "react-native";
import RadioForm,
{
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
}
  from 'react-native-simple-radio-button';
import { AntDesign, FontAwesome, Entypo, Ionicons } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Join from '../RequestTrip/jointrip';


const GOOGLE_MAPS_APIKEY = 'AIzaSyD6Az3ZB4xbtIoahhV-C5mgW8JU-8Miyrg';
const data = [
  {
    label: "Assembly Point 1",
    id: 0
  },
  {
    label: "Assembly Point 2",
    id: 1
  },
  {
    label: "Assembly Point 3",
    id: 2
  }
];
class LocationA extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Image source={require('../../assets/fff.jpg')} style={{ width: "100%" }} />
    )
  }
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      concat: null,
      coords: [],
      x: 'false',
      cordLatitude: 29.9657453,
      cordLongitude: 31.27033269999999,
    };

    this.mergeLot = this.mergeLot.bind(this);

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        this.mergeLot();
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
    );

  }

  mergeLot() {
    if (this.state.latitude != null && this.state.longitude != null) {
      let concatLot = this.state.latitude + "," + this.state.longitude
      this.setState({
        concat: concatLot
      }, () => {
        this.getDirections(concatLot, "29.9657453,31.27033269999999");
      });
    }

  }

  async getDirections(startLoc, destinationLoc) {

    try {
      let resp = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}`)
      let respJson = await resp.json();
      let points = Polyline.decode(respJson.routes[0].overview_polyline.points);
      let coords = points.map((point, index) => {
        return {
          latitude: point[0],
          longitude: point[1]
        }
      })
      this.setState({ coords: coords })
      this.setState({ x: "true" })
      return coords
    } catch (error) {
      // console.log('masuk fungsi')
      this.setState({ x: "error" })
      return error
    }
  }
  render() {

    return (

      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('AllTrips')}>
            <Ionicons style={styles.arrow} name="md-arrow-back" size={20} color="#454F63" />
          </TouchableOpacity>
          <View style={styles.vl}>
            <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
            <Text style={styles.pick} >Pickup Location</Text>

            <Text style={styles.fresh}>Fresh Market</Text>
            <View style={styles.gdot}>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.dot}>.</Text>
              <Text style={styles.dot}>.</Text>
            </View>
            <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
            <Text style={styles.dest}>Destination Location</Text>

            <Text style={styles.home}>My Home</Text>
          </View>
        </View>
        <MapView style={styles.map} initialRegion={{
          latitude: 29.9657453,
          longitude: 31.27033269999999,
          latitudeDelta: 1,
          longitudeDelta: 1
        }}>

          {!!this.state.latitude && !!this.state.longitude && <Marker
            coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
            description={"This is a marker in React Natve"}>
            <Image source={require('../../assets/unnamed.png')} style={{ height: 35, width: 35 }} />
          </Marker>}

          {!!this.state.cordLatitude && !!this.state.cordLongitude && <Marker
            coordinate={{ "latitude": this.state.cordLatitude, "longitude": this.state.cordLongitude }}
            title={"Your Destination"}></Marker>

          }

          {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapViewDirections
            origin={{ latitude: this.state.latitude, longitude: this.state.longitude }}
            destination={{ latitude: this.state.cordLatitude, longitude: this.state.cordLongitude }}
            strokeWidth={6}
            strokeColor="black" />
          }

          {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapViewDirections
            origin={{ latitude: this.state.latitude, longitude: this.state.longitude }}
            destination={{ latitude: this.state.cordLatitude, longitude: this.state.cordLongitude }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={6}
            strokeColor="black" />
          }
        </MapView>
        <View style={styles.confirm}>
          <RadioForm
            style={{ marginTop: 15, marginLeft: 24 }}
            radio_props={data}
            initial={-1}
            onPress={(id) => { }}
            selectedLabelColor={''}
            diabled={false}
            buttonColor={'#3ACCE1'}
            labelStyle={{
              fontSize: 20,
              fontFamily: 'gibson-regular',
              color: '#fff',
              marginLeft: 10,
              marginTop: 10
            }}
          />
          <View style={styles.button}>
            <Button color="#fff" title='Confirm Pickup' onPress={() => this.props.navigation.navigate('Join')} titleStyle={{ fontWeight: 'bold' }} />
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Trips')}>
            <Text style={styles.cancel}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    justifyContent: "center",
    alignItems: "center"
  },
  arrow: {
    marginLeft: 15
  },
  box: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    marginTop: 70,
    // marginLeft: 20,
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
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  confirm: {
    width: '100%',
    backgroundColor: '#505050',
    borderRadius: 3,
    position: "absolute",
    bottom: 0,
    top: 425
  },
  time: {
    fontFamily: 'gibson-regular',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginTop: 24
  },
  money: {
    fontFamily: 'gibson-semibold',
    fontSize: 22,
    color: '#fff',
    marginTop: 24,
    textAlign: 'center'
  },
  fare: {
    fontFamily: 'gibson-light',
    fontSize: 18,
    color: '#fff',
    marginTop: 3,
    textAlign: 'center'
  },
  button: {
    fontFamily: 'gibson-semibold',
    fontSize: 30,
    backgroundColor: '#3ACCE1',
    marginTop: 20,
    marginBottom: 25,
    width: 330,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 12,
    marginLeft: 24,
    fontWeight: '300'
  },
  cancel: {
    fontSize: 16,
    fontFamily: "gibson-bold",
    textAlign: "center",
    color: "#fff",
    marginTop: -8
  }

})

export default LocationA;







// import React from 'react';
// import { StyleSheet, View, Text, Button, Dimensions, ScrollView } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


// export default function MyTrips({ navigation }) {

//     const pressHandler = () => {
//         // navigation.navigate('AllTrips');
//         navigation.push('AllTrips');
//     }

//     return (
//         // <ScrollView>


// <View style={styles.container}>
//     <View style={styles.box}>
//         <View style={styles.vl}>
//             <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
//             <Text style={styles.pick} >Pickup Location</View>
//             <AntDesign style={styles.plus} name="plus" size={12} color="#454F63" />
//             <Text style={styles.fresh}>Fresh Market</Text>
//             <View style={styles.gdot}>
//                 <Text style={styles.dot}>.</Text>
//                 <Text style={styles.dot}>.</Text>
//                 <Text style={styles.dot}>.</Text>
//                 <Text style={styles.dot}>.</Text>
//                 <Text style={styles.dot}>.</Text>
//             </View>
//             <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
//             <Text style={styles.dest}>Destination Location</Text>
//             <Entypo style={styles.plus} name="cross" size={15} color="#454F63" />
//             <Text style={styles.home}>My Home</Text>
//         </View>
//     </View>
//             <View style={styles.mapcontainer}>
//                 <MapView style={styles.mapStyle} />
//                 <View style={styles.locate}>
//                     <Ionicons style={styles.locat} name="md-locate" size={18} color="#454F63" />
//                 </View>
//             </View>
//     <View style={styles.confirm}>
//         <Text style={styles.time}>Estimated Pickup Time : 4 Mins</Text>
//         <Text style={styles.money}>$28-32</Text>
//         <Text style={styles.fare}>Fare Estimate</Text>
//         <View style={styles.button}>
//             <Button color="#fff" title='Confirm Pickup' titleStyle={{ fontWeight: 'bold' }} />
//         </View>
//     </View>
// </View>
//     )


// }


// const styles = StyleSheet.create({
//     container: {
//         position: "relative",
//         backgroundColor: 'transparent',
//         flex: 1
//         // alignItems: 'center',
//         // justifyContent: 'center',
//     },

//     box: {
//         backgroundColor: 'white',
//         // width: 200,
//         opacity: 70,
//         width: "100%",
//         // height: 300,
//         position: "absolute",
//         // position: "absolute",
//         top: 0,
//         paddingBottom: 16

//         // marginTop: 20
//     },
//     vl: {
//         marginLeft: 20
//     },
//     gdot: {
//         marginTop: -27
//     },
//     dot: {
//         marginLeft: 20,
//         // marginTop: 10,
//         color: '#78849E4B'
//     },
//     circle: {
//         marginLeft: 20,
//         marginTop: 7
//     },
//     pick: {
//         fontFamily: 'gibson-regular',
//         fontSize: 12,
//         color: '#959DAD',
//         marginLeft: 40,
//         marginTop: -10
//     },
//     plus: {
//         marginLeft: 300,
//         marginTop: -10
//     },
//     fresh: {
//         fontFamily: 'gibson-semibold',
//         fontSize: 16,
//         color: '#454F63',
//         marginLeft: 40,
//         marginTop: 0
//     },
//     dest: {
//         fontFamily: 'gibson-regular',
//         fontSize: 12,
//         color: '#959DAD',
//         marginLeft: 40,
//         marginTop: -10
//     },
//     home: {
//         fontFamily: 'gibson-semibold',
//         fontSize: 16,
//         color: '#454F63',
//         marginBottom: 20,
//         marginLeft: 40

//     },
//     mapcontainer: {
//         position: "relative",
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//         top: "25%"
//     },
//     mapStyle: {
//         flex: 1,
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height,
//     },
//     locate: {

//         borderRadius: 15,
//         backgroundColor: '#fff',
//         textAlign: 'center',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 50,
//         height: 50,
//         marginTop: -60,
//         marginLeft: 300,
//         // position: "absolute",

//     },
//     confirm: {
//         width: '100%',
//         backgroundColor: '#505050',
//         borderRadius: 3,
//         position: "absolute",
//         bottom: 0
//         // marginTop: 15

//     },
//     time: {
//         fontFamily: 'gibson-regular',
//         fontSize: 14,
//         color: '#fff',
//         textAlign: 'center',
//         marginTop: 24
//     },
//     money: {
//         fontFamily: 'gibson-semibold',
//         fontSize: 22,
//         color: '#fff',
//         marginTop: 24,
//         textAlign: 'center'
//     },
//     fare: {
//         fontFamily: 'gibson-light',
//         fontSize: 18,
//         color: '#fff',
//         marginTop: 3,
//         textAlign: 'center'
//     },
//     button: {
//         fontFamily: 'gibson-semibold',
//         fontSize: 30,
//         backgroundColor: '#3ACCE1',
//         marginTop: 20,
//         marginBottom: 25,
//         width: 330,
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         textAlign: 'center',
//         borderRadius: 12,
//         marginLeft: 24,
//         fontWeight: '300'
//     },

// })




























// import React from 'react';
// import { StyleSheet, View, Text, Button } from 'react-native';
// import { globalStyles } from '../../styles/global';
// import Ionicons from 'react-native-vector-icons';
// import RadioForm,
// {
//   RadioButton,
//   RadioButtonInput,
//   RadioButtonLabel
// }
//   from 'react-native-simple-radio-button';
// import Map from '../../shared/mapView'

// export default function MyTrips({ navigation }) {

//   const pressHandler = () => {
//     // navigation.navigate('AllTrips');
//     navigation.push('Join');
//   }
//   const cancelTripHandler = () => {
//     // navigation.navigate('AllTrips');
//     navigation.push('AllTrips');
//   }
//   const data = [
//     {
//       label: "Assembly Point 1",
//       id: 0
//     },
//     {
//       label: "Assembly Point 2",
//       id: 1
//     },
//     {
//       label: "Assembly Point 3",
//       id: 2
//     }
//   ];



//   return (
//     <View style={globalStyles.container}>
//       <Map />

//       <Text style={globalStyles.rtext}>El Haram-Maadi</Text>
//       <Text style={globalStyles.rtext}>09:00AM-10:30AM</Text>
//       <Text style={globalStyles.rpoint}>Select Your Assembly Point</Text>
//       <RadioForm
//         style={globalStyles.radio}
//         radio_props={data}
//         initial={-1}
//         onPress={(id) => { }}
//         selectedLabelColor={''}
//         diabled={false}
//         labelStyle={{
//           fontSize: 16,
//           fontFamily: 'roboto-regular',
//           color: '#212121',
//           marginLeft: 10,
//         }}
//       />
//       <View style={globalStyles.cancel}>
//         <Button color="#fff" title='Cancel Trip' onPress={cancelTripHandler} />
//       </View>
//       <View style={globalStyles.join}>
//         <Button color="#fff" title='Join' onPress={pressHandler} />
//       </View>
//     </View>

//   )


// }
