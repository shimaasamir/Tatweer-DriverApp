import React from 'react';
import { FlatList, StyleSheet, View, Alert, Text } from 'react-native';
import { Container } from 'native-base';
import UpcomingItem from './UpcomingItem';
import { ApiManager } from '../../../shared/ApiManager';



export default class Trips extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: null

    };
  }

  getTrips = () => {
    let _this = this;
    ApiManager.call('Trip/TripPassengerId', 'POST', { passengerId: 9 }, function (response) {
      if (response.data) {
        console.log(response.data)
        _this.props.parentCallback(false);
        _this.setState({ dataSource: response.data });
      }
      else {
        Alert.alert(response.message);
      }

    });
  };

  componentWillMount() {
    this.props.parentCallback(true);
    this.getTrips();
  }
  render() {
    return (

      <View style={styles.container}>
        <FlatList
          keyExtractor={item => (item.id)}
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <UpcomingItem date={item.tripDate} pick={item.createDate} fresh={item.endTime} dest={item.dest} home={item.home} />
          )}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  date: {
    fontFamily: 'gibson-bold',
    fontSize: 12,
    backgroundColor: '#f5f5f5',
    color: '#78849E',
    marginLeft: 24,
    marginTop: 15
  },
  box: {
    backgroundColor: 'white',
    width: 343,
    marginTop: 15,
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
  container: {
    backgroundColor: '#f5f5f5',
    marginTop: -20

  },


})