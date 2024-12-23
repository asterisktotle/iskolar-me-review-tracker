import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform, StatusBar, ActivityIndicator , KeyboardAvoidingView,TouchableOpacity, Button} from 'react-native';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";
import { FIREBASE_AUTH } from '../firebaseConfig';




export default function AppHome ({navigation}){
    const imageUrl = "https://res.cloudinary.com/dhjk0nt0r/image/upload/v1734869880/TLJG_zviffk.png";
    const imageSecnd = "https://res.cloudinary.com/dhjk0nt0r/image/upload/v1734787937/My%20Brand/iskolar_cmvxvf.png";
    
    const handleSignOut = async () => {
        try {
            await FIREBASE_AUTH.signOut();
        }catch (error){
            console.error("Error signing out: ", error)
            alert("Unable to sign out")
        }
    }

    return (

    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        
        <Button title="sign out"
                onPress={handleSignOut}/>
        <Text style={styles.headerText}>App Home</Text>
      
        <Image source={{uri: imageUrl}}
                style={styles.image}
                resizeMode="contain"
               />
         <Image 
            source={{ uri: imageSecnd}}
            style={styles.image}
                 resizeMode="contain"
                /> 
   

        
        
        </KeyboardAvoidingView>
    </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.darkBlue,  
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        
        
    }, 
    image: {
        width: 300,
        height: 300,
        
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
      },
      headerText: {
        fontSize: 24,
        color: colors.white,
        fontFamily: fonts.SemiBold,
        marginBottom: 20,
      },

})