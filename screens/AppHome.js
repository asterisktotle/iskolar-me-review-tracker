import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, ActivityIndicator , KeyboardAvoidingView,TouchableOpacity} from 'react-native';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";




export default function AppHome ({navigation}){
   
    const imageUrl = `https://res.cloudinary.com/dhjk0nt0r/image/upload/v1/cld-sample-5`;
    const imageSecnd = "https://res.cloudinary.com/dhjk0nt0r/image/upload/v1734787937/My%20Brand/iskolar_cmvxvf.png";
    return (

    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
        
    
        <Text style={styles.headerText}>App Home</Text>
      

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