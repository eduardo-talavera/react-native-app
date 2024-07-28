import React from 'react';
import {SafeAreaView} from 'react-native';
import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons'
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionsScreen } from './src/presentation/screens/DimensionsScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={
        {
          icon: (props) => <IonIcon { ...props } />
        }
      }
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        <DimensionsScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
