import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'

export default function LoginScreen({ navigation }) {

    return (
        <SafeAreaView style={{ flex:1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Login Screen!</Text>
                <TouchableOpacity style={{ marginTop: 20 }}
                onPress={() => navigation.navigate('HomeApp')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }}
                onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
      );
}
