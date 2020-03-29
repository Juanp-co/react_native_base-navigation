import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import CustomHeader from '../CustomHeader';


export default function NotificationsScreen({navigation}) {
    return (
        <SafeAreaView style={{ flex:1 }}>
        <CustomHeader text="Notifications" isHome={true} navigation={navigation}/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Notifications!</Text>
            </View>
        </SafeAreaView>
    );
}

