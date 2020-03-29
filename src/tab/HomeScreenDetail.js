import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader';


export default function HomeScreenDetail({navigation}){

  return (
    <SafeAreaView style={{ flex:1 }}>
    <CustomHeader text="Home detail" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home DETAIL!</Text>
      </View>
    </SafeAreaView>
  );
}