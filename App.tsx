import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import AppRouter from './src/app-router/AppRouter.index';
import createAppStore from './src/app-store/createAppStore';
import { rootSaga } from './src/app-store/rootSaga';
import { BLE_SAGA_ACTION } from './src/bluetooth/constants/bluetooth.constants';

const store = createAppStore();
store.runSaga(rootSaga);

console.log("store", store.getState());
store.dispatch({type: BLE_SAGA_ACTION.BLE_CONNECT_SAGA_ACTION});

function App(){
  return (
  <Provider store={store}>
    <StatusBar/>
    <SafeAreaView style={styles.sectionContainer}>
      <AppRouter/>
    </SafeAreaView>
  </Provider>)
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex:1
  }
});

export default App;
