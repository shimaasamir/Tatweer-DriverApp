import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, View, ImageBackground, TextInput, Button } from 'react-native';
import PasswordField from 'react-native-password-field';

export default function LogIn({ navigation }) {

  const pressHandler = () => {
    // navigation.navigate('AllTrips');
    navigation.push('AllTrips');
  }

  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/97635_coaster-banner.png')}
        style={styles.image}>
      </ImageBackground>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <View style={styles.box}>
          <ImageBackground
            source={require('../assets/454.jpg')}
            style={styles.logo2}>
          </ImageBackground>

          <View>
            <Text style={styles.text}>Your Email</Text>
            <TextInput keyboardType="email-address" style={styles.input} />
            <Text style={styles.text}>Your Password</Text>
            <TextInput style={styles.input} />

          </View>

          <View style={styles.button} color='white'>
            <Button color="#fff" title='Sign in to your account' onPress={pressHandler} />
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  image: {
    width: 375,
    height: 250,

  },
  box: {
    flex: 1,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo2: {
    width: 119,
    height: 80,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 230,
    marginBottom: 40
  },
  text: {
    fontSize: 16,
    marginRight: 120,
  },
  button: {
    width: 230,
    height: 40,
    backgroundColor: '#de282e',
    borderRadius: 10

  }


});
