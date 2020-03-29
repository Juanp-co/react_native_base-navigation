import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader';


export default function SettingsScreenDetail({ navigation }){
  return (
      <SafeAreaView style={{ flex:1 }}>
      <CustomHeader text="Settings detail" navigation={navigation}/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings DETAIL!</Text>
        </View>
      </SafeAreaView>
  );
}

