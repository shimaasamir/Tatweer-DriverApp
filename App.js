import React, { useState } from 'react';
import AllTrips from './screens/AllTrips/AllTrips';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/homeStack';

const getFonts = () => Font.loadAsync({
  'lato-regular': require('./assets/fonts/Lato-Regular.ttf'),
  'opensans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  'lato-bold': require('./assets/fonts/Lato-Bold.ttf'),
  'lato-light': require('./assets/fonts/Lato-Light.ttf'),
  'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
});


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Navigator />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}

