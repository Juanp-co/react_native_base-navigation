import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import { IMAGE } from './constans/image'

export default function CustomHeader({ navigation, isHome, text }) {
  return (
    <View style={{ flexDirection:'row', height:50 }}>
      {
        isHome ? 
        <TouchableOpacity onPress={()=> navigation.openDrawer()}>
          <View style={{ flex:1, justifyContent:'center' }}>
            <Image style={{ width:30, height:30, marginLeft:5 }} 
              source={IMAGE.ICON_MENU}
              resizeMode='contain'></Image>
          </View>
        </TouchableOpacity>
        :
        <TouchableOpacity style={{ flexDirection:'row', alignItems:'center'}}
        onPress={() => navigation.goBack()}>
          <Image style={{ width:25, height:25, marginLeft:5 }} 
          source={IMAGE.ICON_BACK}
          resizeMode='contain'></Image>
          <Text>Back</Text>
        </TouchableOpacity>
      }
      <View style={{ flex:1.5, justifyContent:'center' }}>
        <Text style={{ textAlign:'center' }}>{text}</Text>
      </View>
      <View style={{ flex:1 }}></View>
    </View>
  )
}
