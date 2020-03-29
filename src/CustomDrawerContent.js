import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import {IMAGE} from './constans/image'


export default function CustomDrawerContent({ navigation }){

    return(
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ height:150, alignItems:'center', justifyContent:'center' }}>
                <Image style={{ height:120, width:120, borderRadius:60 }} source={IMAGE.ICON_PROFILE} />
            </View>
            <ScrollView style={{ marginLeft:5 }}>
                <TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.navigate('MenuTab')}>
                    <Text>Menu tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.navigate('Notifications')}>
                    <Text>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginTop:20}} onPress={()=> navigation.navigate('Login')}>
                    <Text>Salir</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
