import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader';


export default function SettingsScreen({navigation}){

  return (
    <SafeAreaView style={{ flex:1 }}>
    <CustomHeader text="Settings" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('SettingsDetail')}>
          <Text>Go Settings Detail!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}