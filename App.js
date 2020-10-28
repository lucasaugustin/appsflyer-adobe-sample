import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  ACPCore,
  ACPLifecycle,
  ACPIdentity,
  ACPSignal,
  ACPMobileLogLevel,
} from '@adobe/react-native-acpcore'

import appsFlyer from 'react-native-appsflyer';

import { keys } from './keys'


const { width,height } = Dimensions.get('window')

const initAdobe = () => {
  ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE)
  ACPCore.configureWithAppId(keys.adobeAppID)
  ACPLifecycle.registerExtension()
  ACPIdentity.registerExtension()
  ACPSignal.registerExtension()
  ACPCore.start()
}

const initAppsFlyer = () => {
  appsFlyer.initSdk(
    {
      devKey: keys.appsFlyerKey,
      isDebug: true,
      appId: keys.appsFlyerAppID,
      onInstallConversionDataListener: true,
    },
    (result) => {
      console.log(result);
    },
    (error) => {
      console.error(error);
    }
  );
}

const App = () => {
  useEffect(() => {
    initAdobe()
    initAppsFlyer()
  }, [])
  
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
