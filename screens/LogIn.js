import React, { Component } from 'react';
import { StyleSheet, Alert, KeyboardAvoidingView, View, ImageBackground, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container } from 'native-base';
import ApiManager from '../shared/ApiManager'


export default class LogIn extends Component {
  static navigationOptions = {
    drawerIcon: (
      <Ionicons name="ios-log-out" size={16} color="#3497FD" />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
      username: 'ahmed@weelo.com',
      password: '123456',
      isLoading: true
    }
    global.token = "";
    global.user = {};
  }
  onChangeText1 = (username) => {
    this.setState({ username });
    return;
  }
  onChangeText2 = (password) => {
    this.setState({ password });
    return;
  }

  getLoginAPI = () => {
    const navigation = this.props.navigation;
    // console.log('getLoginAPI :: UserName:' + this.state.username);
    // console.log('getLoginAPI :: Password:' + this.state.password);

    if (this.state.username != '' && this.state.password != '') {

      let details = {
        'username': this.state.username,
        'password': this.state.password,
        'grant_type': 4
      };

      ApiManager.callForm('token', 'POST', details, function (response) {
        if (response.access_token) {
          global.token = response.access_token;
          ApiManager.callForm('login', 'POST', details, function (response) {
            if (response.data) {
              global.user = response;
              navigation.navigate('Trips');
            }
            else {
              Alert.alert("Oops.. something went wrong.");
            }
          });
        }
        else {
          Alert.alert("Your email or password could be wrong");
        }
      });
    }
    else {
      Alert.alert("Please enter your email and password to proceed");
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loadingOverlay}>
          <Text>Loading...<ActivityIndicator /></Text>
        </View>
      )
    }
    return (
      <Container style={styles.container} >
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={styles.box}>
            <ImageBackground
              source={require('../assets/logo.png')}
              style={styles.logo2}>
            </ImageBackground>
            <View>
              <TextInput keyboardType="email-address" style={styles.input}
                value={this.state.username}
                placeholder="John@email.com" placeholderTextColor='#454F63'
                returnKeyType="next"
                onSubmitEditing={() => this.password.focus()}
                onChangeText={this.onChangeText1}
              />
              <TextInput style={styles.input} secureTextEntry={true} placeholder="Password"
                value={this.state.password}
                placeholderTextColor='#454F63'
                returnKeyType="go"
                ref={(input) => this.password = input}
                onChangeText={this.onChangeText2}
              />
            </View>
            < View style={styles.button} >
              <Button color="#fff" title='LOGIN' onPress={this.getLoginAPI.bind()} />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  box: {
    flex: 1,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo2: {
    width: 250,
    height: 200,
    margin: 10,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#505050',
    padding: 8,
    margin: 10,
    width: 330,
    height: 53,
  },
  text: {
    fontFamily: 'gibson-semibold',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: 26.5

  },
  button: {
    width: 330,
    height: 53,
    backgroundColor: '#505050',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  loadingOverlay:
  {
    flex: 1, 
    padding: 20, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
    height: '100%',
    backgroundColor:'#fff', 
    
  }
});
