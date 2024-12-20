import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity,  KeyboardAvoidingView, ActivityIndicator, Alert} from 'react-native';
import { colors } from "../utility/colors";
import { fonts } from "../utility/fonts";
import BackButton from '../utility/backButton';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';



export default function SignInScreen({ navigation }) {
    const [secureTextEntry, setSecureEntry] = useState (true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState ('FAILED');
    const [loading, setLoading] = useState (false);
    const auth = FIREBASE_AUTH;


    // //check if user is already signed in
    // useEffect (() => {
    //   const unsubscribe = auth().onAuthStateChanged (user => {
    //     if (user) {
    //       navigation.replace("Home"); //go to the home screen immediately 
    //     } }
    //   );
    //     return unsubscribe;
    // }, [] )


    const handleSignIn = async () => {
      setLoading (true);
      try {
        const response = await signInWithEmailAndPassword(auth,email,password);
        console.log("Signed in successfully", response);
        navigation.replace('AppHome');
      } catch (error) {
        console.log(error);
        Alert.alert ('Gay alert!',"You smells like gay. Admit it and try again.", [
          {text:"I'm gay" }
        ] )
      } finally {
        setLoading(false);
      }
    }

  return (
    <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView behavior='padding'>
      <BackButton />

     <View styles={styles.imagesContainer}>
      <KeyboardAvoidingView>
           <Image source={require("../assets/saturn.png")} style={styles.saturnImage} />
           <Image source={require("../assets/welcome-astronaut.png")} style={styles.welcomeAstronaut} />
        </KeyboardAvoidingView>
     </View>

      <View style={styles.contentWrapper}>
   
        <View style={styles.formWrapper}>
          <Text style={styles.title}>Hey Welcome back!</Text>
          <View style={styles.usernameContainer}>
            <Ionicons 
              name={"person"} 
              size={24}
              color={colors.white}
            />
            <TextInput 
              style={styles.username}
              value={email}
              onChangeText={setEmail}
              placeholder='email'
              keyboardType='email-address'
              autoComplete='email'
              placeholderTextColor={'#73AFCC'}
              autoCapitalize='none'
          
            />
          </View>
          
          <View style={styles.passwordContainer}>
            <Ionicons 
              name={"lock-closed"} 
              size={24}
              color={colors.white}
            />
            <TextInput 
              style={styles.password}
              value={password}
              onChangeText={setPassword}
              placeholder={'Password'}
              autoComplete='password'
              maxLength={16}
           
              
              
              placeholderTextColor={'#73AFCC'}
              secureTextEntry={secureTextEntry}
            />

          
            <TouchableOpacity
              onPress={ () => {setSecureEntry((prev) => !prev)}} >
              <Ionicons 
              name={ secureTextEntry ? "eye-off-outline" : "eye-outline"} 
              size={20}
              color={"#C0C9CE"}  
              />
            </TouchableOpacity>

           

          </View>       

          <TouchableOpacity activeOpacity={0.5}>
            <Text  style={styles.forgetPasswordText} >Forgot password? </Text> 
          </TouchableOpacity>
         

          { loading ? <ActivityIndicator size='large' color='white' /> 
          : <TouchableOpacity 
              style={styles.signInBtnContainer} 
              activeOpacity={0.7}
              onPress={handleSignIn}>
              <Text 
                style={styles.signIn}>
                SIGN IN
              </Text>
            </TouchableOpacity> }


         

        </View>

      </View>

    </KeyboardAvoidingView>
    </SafeAreaView>
  );
}


const inputContainerStyle = {
  backgroundColor: colors.lightBlueMid,
  width: '100%',
  height: 45,
  borderRadius: 10,
  flexDirection: 'row',
  alignItems: 'center', 
  paddingInline: 20,
  gap:10,
}

const textInputStyle = {
  color: colors.white,
  fontFamily: fonts.Regular,
  flex: 1,
  paddingHorizontal: 10,
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },

  contentWrapper: {
    alignItems: 'center',
    paddingTop: 90,
    width: '100%',
  },

  title: {
    fontSize: 28,
    color: colors.white,
    fontFamily: fonts.Bold,
  },

  formWrapper: {
    width: '100%',
    paddingInline: 18,
    gap: 20,
  },
  usernameContainer: inputContainerStyle,
  passwordContainer: inputContainerStyle,
  username: textInputStyle,
  password: textInputStyle,

  
  forgetPasswordText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.white,
    textAlign:'right'
  },

  signInBtnContainer: {
    backgroundColor: colors.lightBlueGlass, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingBlock: 15,  
  },
  signIn: {
    color: colors.white,
    fontFamily: fonts.SemiBold,
    fontSize: 20,
  },
  saturnImage: {
    position: 'absolute',
    resizeMode:"contain",
    height: 150,
    width: 140,
    right: 0,
    top: -60,
  },

  welcomeAstronaut: {
    position: 'absolute',
    resizeMode:"contain",
    height: 300,
    width: 500,
    bottom: -670,
    right: -160,
  },


});
