import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform, StatusBar, TouchableOpacity} from 'react-native';
import {colors} from "../utility/colors"
import {fonts} from "../utility/fonts"

export default function HomeScreen({navigation}) {

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleSignIn = () => {
    navigation.navigate('SignIn');
  };


  return (
    <SafeAreaView style={styles.container}>
      <Image source={require ("../assets/iskolar.png")} style={styles.logo} />
      <Text style={styles.text}>LEARN BY LOOKSFAM</Text>
      <Image source={require("../assets/rocket.png")} style={styles.rocketImage} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.signUpBtnContainer} 
          onPress={handleSignUp} 
          activeOpacity={0.7}>
            <Text 
              style={styles.signUp}>
                SIGN UP WITH GOOGLE
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInLink} activeOpacity={0.7}
        onPress={handleSignIn}>
        <Text style={styles.signIn}>SIGN IN</Text>
          </TouchableOpacity>  
        
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue, 
    alignItems:'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'light',
    height:25, 
    fontFamily: fonts.Regular
  },
  logo: {
    height: 60,
    width: 350,
    alignItems: 'center'
  }, 
  rocketImage: {
    height: 300,
    width: 185,
    resizeMode: 'contain',
    marginBottom: 75

  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.lightBlueMid,
    height: 'auto',
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderTopRightRadius: 20,
  },
  signUpBtnContainer: {
    backgroundColor: colors.lightBlueBtn, 
    paddingVertical: 10,
    paddingInline: 70,
    borderRadius: 20,
    paddingBlock: 15,  
  },
  signUp: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold', 
    fontFamily: fonts.SemiBold
  },
  signIn: {
    fontSize: 18,
    color: colors.white,
    paddingBlock: 10,
    fontFamily: fonts.SemiBold
    
  }

});
