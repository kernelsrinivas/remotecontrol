import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const noop = (): void => {};

export default function HomeScreen(){
    return <View style={{flex:1, backgroundColor:'#222'}}>
         <View style={style.stHeaderGroup}>
        <Icon name="bars" size={30} color="#888" />
        <Text style={{fontSize:28, color:'#aaa'}}>Remote Control</Text>
        <Icon name="ellipsis-v" size={30} color="#888" />       
        </View>
        <View style={{marginTop:10, flex:0.4, backgroundColor:'grey'}}></View>
        <View style={{flex:0.6, marginTop: 10}}>
        <View style={style.stButtonGroup}>
            <TouchableOpacity style={[style.stButtonLeft, {borderColor:'#000', backgroundColor:'#111'}]} onPress={noop}>
                <Icon name="bluetooth-b" size={48} color='#666'/>
                <Text style={style.stText}>Bluetooth</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.stButtonRight]} onPress={noop}>
                <Icon name="wifi" size={48}  color='#666'/>
                <Text style={style.stText}>WiFi</Text>
            </TouchableOpacity>
        </View>
        <View style={style.stButtonGroup}>
            <TouchableOpacity style={[style.stButtonLeft]} onPress={noop}>
                <Icon name="usb" size={48}  color='#666'/>
                <Text style={style.stText}>USB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.stButtonRight]} onPress={noop}>
                <Icon name="broadcast-tower" size={48}  color='#666'/>
                <Text style={style.stText}>Zigbee</Text>
            </TouchableOpacity>
        </View>
        <View style={style.stButtonGroup}>
            <TouchableOpacity style={[style.stButtonLeft]} onPress={noop}>
                <Icon name="compass" size={48}  color='#666'/>
                <Text style={style.stText}>Motion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.stButtonRight]} onPress={noop}>
                <Icon name="microphone" size={48}  color='#666'/>
                <Text style={style.stText}>Voice</Text>
            </TouchableOpacity>
        </View>
        <View style={style.stButtonGroup}>
            <TouchableOpacity style={[style.stButtonLeft]} onPress={noop}>
                <Icon name="video" size={48}  color='#666'/>
                <Text style={style.stText}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.stButtonRight]} onPress={noop}>
                <Icon name="cloud" size={48}  color='#666'/>
                <Text style={style.stText}>Custom</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
}

const style = StyleSheet.create({
    stText: {color:'#888'},
    stHeaderGroup: {flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:12, paddingVertical: 10},
    stButtonGroup: {flexDirection:'row', flexWrap:'wrap', marginTop:10, paddingHorizontal:10},
    stButtonRight: {flex:0.5, borderRadius:10, borderWidth:1, padding:10, justifyContent:'center', alignItems:'center', marginLeft:5, borderColor:'#000', backgroundColor:'#111'},
    stButtonLeft: {flex:0.5, borderRadius:10, borderWidth:1, padding:10, justifyContent:'center', alignItems:'center', marginRight:5, borderColor:'#000', backgroundColor:'#111'}
})