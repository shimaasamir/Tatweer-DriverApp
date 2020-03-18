import React, { Component } from "react";
import { Text, Button, StyleSheet, Dimensions, View, Image } from "react-native";
import { Container } from "native-base";
import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const GOOGLE_MAPS_APIKEY = 'AIzaSyD6Az3ZB4xbtIoahhV-C5mgW8JU-8Miyrg';

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
                {/* <View style={styles.box}>
                    <View style={styles.vl}>
                        <FontAwesome style={styles.circle} name="circle" size={8} color="#78849E" />
                        <Text style={styles.pick} >Pickup Location</Text>
                        <AntDesign style={styles.plus} name="plus" size={12} color="#454F63" />
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
                        <Entypo style={styles.plus} name="cross" size={15} color="#454F63" />
                        <Text style={styles.home}>My Home</Text>
                    </View>
                </View> */}
                <MapView style={styles.map}
                    zoomEnabled={true}
                    scrollEnabled={true}
                    showsScale={true}
                    initialRegion={{
                        latitude: 29.9657453,
                        longitude: 31.27033269999999,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05

                    }}>

                    {!!this.state.latitude && !!this.state.longitude && <Marker
                        coordinate={{ "latitude": this.state.latitude, "longitude": this.state.longitude }}
                        description={"Your Location"}>

                        <Image source={require('../../assets/tom.jpg')} style={styles.tom} />
                    </Marker>}

                    {!!this.state.cordLatitude && !!this.state.cordLongitude && <Marker
                        coordinate={{ "latitude": this.state.cordLatitude, "longitude": this.state.cordLongitude }}
                        title={"Your Destination"}>
                        <Image source={require('../../assets/car2.png')} style={{ height: 40, width: 40 }} />
                    </Marker>

                    }

                    {!!this.state.latitude && !!this.state.longitude && this.state.x == 'true' && <MapViewDirections
                        origin={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                        destination={{ latitude: this.state.cordLatitude, longitude: this.state.cordLongitude }}
                        strokeWidth={4}
                        strokeColor="black" />
                    }

                    {!!this.state.latitude && !!this.state.longitude && this.state.x == 'error' && <MapViewDirections
                        origin={{ latitude: this.state.latitude, longitude: this.state.longitude }}
                        destination={{ latitude: this.state.cordLatitude, longitude: this.state.cordLongitude }}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={4}
                        strokeColor="black" />
                    }
                </MapView>
                <View style={styles.confirm}>
                    <View style={styles.redline}></View>
                    <Text style={styles.time}>4 Mins Away</Text>
                    <View style={styles.driver}>
                        <Image
                            style={styles.driverImage}
                            source={require('../../assets/454.jpg')} />
                        <Text style={styles.name} >Alexa</Text>
                        <Text style={styles.rate}>4.5 Stars</Text>
                        <View style={styles.icon} >
                            <Feather name="phone" size={16} color="#fff" />
                        </View>
                    </View>
                    <View style={styles.hr}></View>
                    <View style={styles.car}>
                        <Image
                            style={styles.driverImage}
                            source={require('../../assets/car.jpg')}
                        />
                        <Text style={styles.name} >Audi S7</Text>
                        <Text style={styles.rate}>White</Text>
                        <View style={styles.box} >
                            <Text style={styles.number}>H32KHS</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button color="#fff" title='CANCEL' onPress={() => this.props.navigation.navigate('Trips')} />
                    </View>
                </View>
            </View>


        );
    }
}



const styles = StyleSheet.create({
    container: {
        // position: "relative",
        backgroundColor: 'transparent',
        // flex: 1

    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // marginTop: 70
    },
    tom: {
        height: 35,
        width: 35,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: "#78849E"
    },
    confirm: {
        width: '100%',
        height: 360,
        backgroundColor: '#000000',
        borderRadius: 3,
        position: "absolute",
        bottom: 0
    },
    redline: {
        width: "100%",
        height: 8,
        borderRadius: 3,
        backgroundColor: "#EE2125"
    },
    time: {
        fontFamily: 'gibson-bold',
        fontSize: 20,
        color: '#fff',
        marginLeft: 24,
        marginTop: 24
    },
    driverImage: {
        width: 60,
        height: 60,
        borderRadius: 12,
        marginTop: 30,
        marginLeft: 24
    },
    name: {
        fontFamily: 'gibson-semibold',
        fontSize: 16,
        color: '#fff',
        marginTop: -50,
        marginLeft: 95

    },
    rate: {
        fontFamily: 'gibson-regular',
        fontSize: 14,
        color: '#FFFFFF90',
        marginTop: 3,
        marginLeft: 95
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: "#353A50",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -40,
        marginLeft: 311
    },
    hr: {
        width: "92%",
        height: 1,
        backgroundColor: "#444F63",
        marginTop: 30,
        marginLeft: 15
    },
    box: {
        width: 70,
        height: 30,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#78849E",
        marginTop: -40,
        marginLeft: 290
    },
    number: {
        fontFamily: "gibson-regular",
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
        justifyContent: "center",
        marginTop: 6

    },

    button: {
        fontFamily: 'gibson-semibold',
        fontSize: 30,
        backgroundColor: '#444F63',
        marginTop: 50,

        width: 330,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 12,
        marginLeft: 24,

    },

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
//             <Text style={styles.pick} >Pickup Location</Text>
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