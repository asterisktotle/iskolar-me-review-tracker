import React, { useState } from 'react';
import { Alert,StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";
import BackButton from '../utility/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FIREBASE_AUTH } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { KeyboardAvoidingView } from 'react-native';




export default function SignUpScreen({ navigation }) {
  const [secureTextEntry, setSecureEntry] = useState (true); 
  const [secureConfirmPass, setSecureConfirmPass] = useState (true); 
  
  const [loading, setLoading] = useState (false);
  const [password, setPassword] = useState ('');
  const [confirmPassword, setConfirmPassword] = useState ('');
  const [errorMessage, setErrorMessage] = useState ();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState ('');
  const auth = FIREBASE_AUTH;
  
  const handlePasswordMatch = () => {
    if (password !== confirmPassword) {
      setErrorMessage ('Passwords do not match');
      return;
    } else {
      setErrorMessage ('');
      handleSignUp();
    }
  }
  
  const handleSignUp = async () => {

    //validate the input
    if (!email || !password){
      alert ('Please fill in all the fields')
      return;
    }
    //email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      alert('Please enter a valid email address');
      return;
    }
    //password must be at minimum of 6 characters
    if(password.length < 6){
      alert('Password should be at least 6 characters long')
      return;
    }

    //set the loading screen for waiting
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword (auth,email,password);
      console.log('User registered successfully:', userCredential.user);
      navigation.replace('AppHome');

    } catch (error) {
      let errorMessage = 'Registration failed';
      switch (error.code) {
        case 'auth/email-already-in-use': 
          errorMessage = 'This email is already registered';
          break;
        case 'auth/invalid':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Email/password accounts are not enabled';
          break;
        default: 
          errorMessage = error.message;
      }
      alert('Sign up failed' + error.message);
    } finally {
      setLoading(false);
    }

  }

  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
      <BackButton/>

      <View style={styles.contentWrapper}>
        <View style={styles.formWrapper}>
      
          <Text style={styles.title}>Create an account to join us!</Text>
      
          <View style={styles.emailContainer}>
            <Ionicons 
              name={"mail"} 
              size={24}
              color={colors.white}
            />
            <TextInput 
               style={styles.email}
               value={email}
               onChangeText={setEmail}
               keyboardType='email-address'
               autoComplete='email'
               placeholder='Email'
               autoCapitalize='none'
               placeholderTextColor={'#73AFCC'}
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
               secureTextEntry = {secureTextEntry}
               value={password}
               onChangeText = {setPassword} //updates the password state
               autoComplete='password'
               placeholder='Enter password'
               maxLength={16}
               placeholderTextColor={'#73AFCC'}
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
          
          <View style={styles.passwordContainer}>
            <Ionicons 
              name={"lock-closed"} 
             size={24}
             color={colors.white}
            />
            <TextInput 
               style={styles.password}
               value={confirmPassword}
               onChangeText={setConfirmPassword}
               secureTextEntry = {secureConfirmPass}
               placeholder='Confirm password'
               maxLength={16}
               placeholderTextColor={'#73AFCC'}
               />
            {confirmPassword ? <Text style={styles.errorText}> {errorMessage}</Text> : null}
            <TouchableOpacity
              onPress={() => setSecureConfirmPass ( (prev) => !prev )}
            >
              <Ionicons 
                name={ secureConfirmPass ? "eye-off-outline" : "eye-outline"} 
                size={20}
                color={"#C0C9CE"}  
              />
            </TouchableOpacity>
          </View>
          
        {loading ? <ActivityIndicator size='large' color='white'/> : 

          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.9} onPress={handlePasswordMatch} > 
            <Text style={styles.submitText} >
              SUBMIT
            </Text>
          </TouchableOpacity>
          }

          <Text style={styles.questionText}>
              Already have an account? { }
              <Text
                style={styles.signInLink} 
                onPress={() => navigation.navigate('SignIn')} 
              >
                SIGN IN
              </Text>
              </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  formWrapper: {
    gap: 20,
    padding: 18,
    width: '100%',
  },

  title: {
    fontSize: 22,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },

  emailContainer: inputContainerStyle,
  email: textInputStyle,
  // usernameContainer: inputContainerStyle,
  // username: textInputStyle,
  passwordContainer: inputContainerStyle,
  password: textInputStyle,

  errorText: {
    color: 'red',
    fontSize: 10,
  },

  submitBtn:{
    backgroundColor: colors.lightBlueGlass,
    backgroundColor: colors.lightBlueGlass, 
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingBlock: 15,  
  },
  submitText: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.Regular,
  },

  questionText: {
    color: colors.white,
    fontFamily: fonts.Regular,
    fontSize: 16,
  },
  signInLink: {
    color: colors.hyperlinkClr,
    fontFamily: fonts.Regular,
    fontSize: 16,
  },

});
