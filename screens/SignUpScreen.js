import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Image, TouchableOpacity} from 'react-native';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";
import BackButton from '../utility/backButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SignUpScreen({ navigation }) {
  const [secureTextEntry, setSecureEntry] = useState (true); 
  const [secureConfirmPass, setSecureConfirmPass] = useState (true); 

  const [password, setPassword] = useState ("");
  const [confirmPassword, setConfirmPassword] = useState ("");
  const [errorMessage, setErrorMessage] = useState ("");

  const handlePasswordMatch = () => {
    if (password !== confirmPassword) {
      setErrorMessage ('Passwords do not match');
    } else {
      setErrorMessage ('');
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <BackButton/>
      
      <View style={styles.contentWrapper}>
        <View style={styles.formWrapper}>
          <Text style={styles.title}>WELCOME!</Text>
          <Text style={styles.title}>Create an account to join us</Text>
      
          <View style={styles.emailContainer}>
            <Ionicons 
              name={"person"} 
              size={24}
              color={colors.white}
            />
            <TextInput 
               style={styles.email}
               placeholder='Email'
               placeholderTextColor={'#73AFCC'}
            />
          </View>

          <View style={styles.usernameContainer}>
            <Ionicons 
              name={"person"} 
              size={24}
              color={colors.white}
            />
            <TextInput 
               style={styles.username}
               placeholder='Username'
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
               placeholder='Enter password'
               placeholderTextColor={'#73AFCC'}
               secureTextEntry = {secureTextEntry}
               onChangeText = {setPassword} //updates the password state
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
               placeholder='Confirm password'
               placeholderTextColor={'#73AFCC'}
               secureTextEntry = {secureConfirmPass}
               onChangeText={setConfirmPassword}
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
          
          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.9} onPress={handlePasswordMatch} > 
            <Text style={styles.submitText} >
              SUBMIT
            </Text>
          </TouchableOpacity>

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
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },

  emailContainer: inputContainerStyle,
  email: textInputStyle,
  usernameContainer: inputContainerStyle,
  username: textInputStyle,
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
