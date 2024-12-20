import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {colors} from "../utility/colors"
import {fonts} from "../utility/fonts"

import {WebView} from 'react-native-webview'


export default function AppHome ({navigation}){

    return (

    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        
        <Text>App Home</Text>
        <WebView source={{ uri: 'https://drive.google.com/file/d/1JlXJXkFCNDOPJWQGKnRFJmGnN1nt-YMP/view?usp=sharing', cache: true }} style={styles.pdfView} />;


        </KeyboardAvoidingView>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.darkBlue,
    },
    pdfView: {
        height: "100%",
        width: '100%',
        frameBorder: 0,
    }

    
})