import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const noop = (): void => {};

export type GenericFunction<T> = () => T;
export type PromiseFunction<T> = () => Promise<T>;

interface ModuleType {
    name: string; icon: string; callback: GenericFunction<void>;
}

interface ModulePropTypes {
    left: ModuleType;
    right: ModuleType;
}

const ModuleComponent = ({left, right}: ModulePropTypes) => {
    return (
        <View style={style.stButtonGroup}>
            <TouchableOpacity style={[style.stButtonLeft]} onPress={left.callback}>
                <Icon name={left.icon} size={48} color='#666'/>
                <Text style={style.stText}>{left.name}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.stButtonRight]} onPress={right.callback}>
                <Icon name={right.icon} size={48}  color='#666'/>
                <Text style={style.stText}>{right.name}</Text>
            </TouchableOpacity>
        </View>
    );
}

const MODULES = {
    bluethooth: {name: 'Bluetooth', icon: 'bluetooth-b', callback: noop},
    wifi: {name: 'WiFi', icon: 'wifi', callback: noop},
    usb: {name:'USB', icon: 'usb', callback: noop},
    rf: {name:'RF', icon:'broadcast-tower', callback: noop},
    motion: {name:'Motion', icon:'compass', callback: noop},
    voice: {name:'Voice', icon:'microphone', callback: noop},
    camera: {name:'Camera', icon:'video', callback: noop},
    custom: {name:'Custom', icon:'cloud', callback: noop},
}

export default function HomeScreen(){
    return <View style={{flex:1, backgroundColor:'#222'}}>
         <View style={style.stHeaderGroup}>
             <TouchableOpacity onPress={noop}>
        <Icon name="bars" size={30} color="#888" />
            </TouchableOpacity>
        <Text style={{fontSize:28, color:'#aaa'}}>Remote Control</Text>
            <TouchableOpacity onPress={noop}>
        <Icon name="ellipsis-v" size={30} color="#888" />       
        </TouchableOpacity>
        </View>
        <View style={{marginTop:10, flex:0.3, backgroundColor:'grey'}}></View>
        <View style={{flex:0.6, marginTop: 10}}>
            <ModuleComponent left={MODULES.bluethooth} right={MODULES.wifi}/>
            <ModuleComponent left={MODULES.usb} right={MODULES.rf}/>
            <ModuleComponent left={MODULES.motion} right={MODULES.voice}/>
            <ModuleComponent left={MODULES.camera} right={MODULES.custom}/>
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