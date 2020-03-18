// import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
// import AllTripsStack from './alltripsStack';
// import {View, Text, Image, StyleSheet} from 'react-native';
// import {Container, Content, Body} from 'native-base';
// import HomeStack from './homeStack';
// import JoinStack from './joinStack';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import React from 'react';






// const RootDrawerNavigator = createDrawerNavigator(
//     {
//         LogIn: {
//             screen: HomeStack,
//         },
//         Trips: {
//             screen: AllTripsStack,
//         },
//         Join: {
//             screen: JoinStack,
//         },
//     },{
//         initialRouteName: 'LogIn',
//         contentComponent: CustomDrawerContentComponent,
//         drawerWidth: "75%"
//     }
// );
// const CustomDrawerContentComponent = (props) => {
//     <Container>
//         <Header>
//             <Body>
//                 <Image 
//                 style={styles.drawerImage}
//                 source={require('../assets/canal-rocks-3992x2992-ocean-aerial-view-coastline-australia-4k-14778.jpg')}/>
//             </Body>
//         </Header>
//     </Container>
// }

// export default createAppContainer(RootDrawerNavigator);

// const styles = StyleSheet.create({
// drawerImage: {
//     width: 322
// }
// })