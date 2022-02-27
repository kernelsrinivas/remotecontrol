import React from "react";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen(){
    return <View style={{flex:1}}>
         <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:12, paddingVertical: 10}}>
        <Icon name="bars" size={30} color="#111" />
        <Text style={{fontSize:28}}>Remote Control</Text>
        <Icon name="ellipsis-v" size={30} color="#111" />       
        </View>
        <View style={{marginTop:10, flex:0.4, backgroundColor:'grey'}}></View>
        <View style={{flex:0.6, marginTop: 10}}>
        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:10, paddingHorizontal:10}}>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginRight:5}}>
                <Icon name="bluetooth-b" size={48} color='#ccc'/>
                <Text>Bluetooth</Text>
            </View>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginLeft:5}}>
                <Icon name="wifi" size={48} color='#ccc'/>
                <Text>WiFi</Text>
            </View>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:10, paddingHorizontal:10}}>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginRight:5}}>
                <Icon name="usb" size={48} color='#ccc'/>
                <Text>USB</Text>
            </View>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginLeft:5}}>
                <Icon name="broadcast-tower" size={48} color='#ccc'/>
                <Text>Zigbee</Text>
            </View>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:10, paddingHorizontal:10}}>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginRight:5}}>
                <Icon name="compass" size={48} color='#ccc'/>
                <Text>Motion</Text>
            </View>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginLeft:5}}>
                <Icon name="microphone" size={48} color='#ccc'/>
                <Text>Voice</Text>
            </View>
        </View>
        <View style={{flexDirection:'row', flexWrap:'wrap', marginTop:10, paddingHorizontal:10}}>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginRight:5}}>
                <Icon name="video" size={48} color='#ccc'/>
                <Text>Camera</Text>
            </View>
            <View style={{flex:0.5, borderRadius:10, borderWidth:1, borderColor:'grey', padding:10, justifyContent:'center', alignItems:'center', marginLeft:5}}>
                <Icon name="cloud" size={48} color='#ccc'/>
                <Text>Custom</Text>
            </View>
        </View>
        </View>
    </View>
}