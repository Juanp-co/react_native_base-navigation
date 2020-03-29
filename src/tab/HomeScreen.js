import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader';


export default function HomeScreen({ navigation }){

  return (
    <SafeAreaView style={{ flex:1 }}>
    <CustomHeader text="Home" isHome={true} navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity style={{ marginTop: 20 }}
        onPress={() => navigation.navigate('HomeDetail')}>
          <Text>Go Home Detail!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}