import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform
} from 'react-native';
import { Provider } from 'react-redux';
import AppRouter from './src/app-router/AppRouter.index';
import createAppStore from './src/app-store/createAppStore';
import { rootSaga } from './src/app-store/rootSaga';

const store = createAppStore();
store.runSaga(rootSaga);

function App(){
  return (
  <Provider store={store}>
    <StatusBar barStyle={Platform.OS === "ios" ? 'default': 'light-content'} backgroundColor={'#222'} networkActivityIndicatorVisible={true}/>
    <SafeAreaView style={styles.sectionContainer}>
      <AppRouter/>
    </SafeAreaView>
  </Provider>)
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: Platform.OS == "ios" ? 32 : 0,
    flex:1,
    backgroundColor:'#222'
  }
});

export default App;
