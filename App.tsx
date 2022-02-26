/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(){
  return <View style={styles.sectionContainer}>
    <Text>Remote Control</Text>
    <View style={{flexDirection:'row'}}>
        <View style={{width:32, height:32, backgroundColor:'red', margin:1}}></View>
        <View style={{width:32, height:32, backgroundColor:'orange', margin:1}}></View>
        <View style={{width:32, height:32, backgroundColor:'purple', margin:1}}></View>
        <View style={{width:32, height:32, backgroundColor:'pink', margin:1}}></View>
        <View style={{width:32, height:32, backgroundColor:'redpink', margin:1}}></View>
        <View style={{width:32, height:32, backgroundColor:'darkred', margin:1}}></View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    justifyContent:'center',
    alignItems:'center',
    flex:1
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
