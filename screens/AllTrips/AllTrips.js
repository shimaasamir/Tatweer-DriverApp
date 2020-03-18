import React, { Component } from 'react';
import { Container, Header, Icon, Left, Tab, TabHeading, Tabs } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Tab1 from '../MyTrips/MyTripsPast';
import Tab2 from '../MyTrips/MyTripsUpcoming';
import { useNavigation } from '@react-navigation/native';


export default class TabsExample extends Component {

    static navigationOptions = {
        drawerIcon: (
            <AntDesign name="calendar" size={16} color="#3497FD" />
        )
    }

    render() {
        return (

            <Container style={styles.tab}>
                <Header style={{ backgroundColor: "#fff", borderBottomColor: "#fff" }} >
                    <Left>
                        <Icon name="ios-menu" onPress={() =>
                            this.props.navigation.navigate('DrawerOpen')}
                        />
                    </Left>
                </Header>
                <Text style={styles.trips}>Trips</Text>
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 6, borderBottomColor: '#EE2125', }}>
                    <Tab style={styles.tabs} heading={<TabHeading style={{ backgroundColor: '#FFFFFF' }} activeTextStyle={{ color: '#959DAD', fontWeight: 'normal' }}>

                        <Text style={{ color: '#454F63', fontFamily: 'gibson-bold', fontSize: 13 }}>HISTORY</Text>
                    </TabHeading>}>
                        <Tab1 />
                    </Tab>
                    <Tab
                        heading={<TabHeading style={{ backgroundColor: '#FFFFFF' }}>

                            <Text style={{ color: '#454F63', fontFamily: 'gibson-bold', fontSize: 13 }}>UPCOMING</Text>
                        </TabHeading>}>
                        <Tab2 />
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    tabs: {
        backgroundColor: '#f5f5f5',
        // marginTop: 10
    },
    trips: {
        fontFamily: 'gibson-semibold',
        fontSize: 40,
        color: '#454F63',
        marginLeft: 24,
        marginTop: 10,
        marginBottom: 10
    }
})