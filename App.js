import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  ACPCore,
  ACPLifecycle,
  ACPIdentity,
  ACPSignal,
  ACPMobileLogLevel,
} from '@adobe/react-native-acpcore'

const { width,height } = Dimensions.get('window')

const initAdobe = () => {
  ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE)
  ACPCore.configureWithAppId('')
  ACPLifecycle.registerExtension()
  ACPIdentity.registerExtension()
  ACPSignal.registerExtension()
  ACPCore.start()
}

const App = () => {
  useEffect(initAdobe, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{height, width, justifyContent: "center", alignItems: "center"}}>
          <Text style={{fontSize: 20}}>AppsFlyerAdobe Test App</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
