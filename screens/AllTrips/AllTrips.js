import React, { Component } from 'react';
import { Container, Header, Icon, Left, Tab, TabHeading, Tabs, Content } from 'native-base';
import { Text, StyleSheet, View, RefreshControl } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import UpcomingBox from '../MyTrips/Upcoming/UpcomingBox'
import PastBox from '../MyTrips/Past/PastBox';
import { PageLoader } from '../../shared/ApiManager';


export default class AllTrips extends Component {

    constructor(props) {
        super(props)
        this.state = { isLoading: false,  refreshing: false };
    }

    callbackFunction = (isLoading) => {
        this.setState({ isLoading: isLoading });
    };

    static navigationOptions = {
        drawerIcon: (
            <AntDesign name="calendar" size={16} color="#3497FD" />
        )
    }
    updateContent() {
        this.setState({refreshing:true});
        setTimeout(()=>{
            this.setState({refreshing:false});
        },1000);
    }
    // goToTripDetails = () => {
    //     navigation.push('RequestaTrip');
    // }

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

                        <Text style={{ color: '#454F63', fontFamily: 'gibson-bold', fontSize: 13 }}>UPCOMING</Text>
                    </TabHeading>}>
                     <Content style={styles.reload} refreshControl={<RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>{this.updateContent()}}/>
                        }>
                        </Content>
                        <PageLoader isLoading={this.state.isLoading}></PageLoader>
                            <UpcomingBox parentCallback={this.callbackFunction} />
                       
                    </Tab>
                    <Tab style={styles.tabs} heading={<TabHeading style={{ backgroundColor: '#FFFFFF' }} activeTextStyle={{ color: '#959DAD', fontWeight: 'normal' }}>

                        <Text style={{ color: '#454F63', fontFamily: 'gibson-bold', fontSize: 13 }}>HISTORY</Text>
                    </TabHeading>}>
                    <Content style={styles.reload} refreshControl={<RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={()=>{this.updateContent()}}/>
                        }>
                        </Content>
                        
                            <PastBox />
                        
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
    },
    reload: {}
})