import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader';


export default function RegisterScreen({ navigation }){
    return (
        <SafeAreaView style={{ flex:1 }}>
        <CustomHeader text="Register" navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Register Screen!</Text>
            </View>
        </SafeAreaView>
    );
}



