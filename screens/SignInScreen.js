import React, {useState} from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
import { colors } from "../utility/colors";
import { fonts } from "../utility/fonts";
import BackButton from '../utility/backButton';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function SignInScreen({ navigation }) {
    const [secureTextEntry, setSecureEntry] = useState (true);

  return (
    <SafeAreaView style={styles.container}>
      <BackButton />

      {/* <Image source={require("../assets/moon.png")} style={styles.moonImage} /> */}

      <View style={styles.contentWrapper}>
        <Text style={styles.title}>SIGN IN</Text>
        <View style={styles.formWrapper}>
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
              placeholder='Password'
              placeholderTextColor={'#73AFCC'}
              secureTextEntry={secureTextEntry}/>
            
            <TouchableOpacity
              onPress={ () => {setSecureEntry((prev) => !prev)}} >
              <Ionicons 
              name={"eye-off-outline"} 
              size={20}
              color={"#C0C9CE"}  
              />
            </TouchableOpacity>

          </View>       

          <Text style={styles.questionText}>
            Don't have an account? { }
            <Text
              style={styles.signUpLink} 
              onPress={() => navigation.navigate('SignUp')} >
                SIGN UP
            </Text>
          </Text>

          <TouchableOpacity 
            style={styles.signInBtnContainer} 
            onPress={console.log('signing in...')} 
            activeOpacity={0.7}>
            <Text 
              style={styles.signIn}>
                SIGN IN
            </Text>
          </TouchableOpacity>

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
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    width: '100%',
  },

  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.Bold,
    marginBottom: 10,
  },

  formWrapper: {
    width: 330,
    gap: 20,
  },
  usernameContainer: inputContainerStyle,
  passwordContainer: inputContainerStyle,
  username: textInputStyle,
  password: textInputStyle,
  
  questionText: {
    color: colors.white,
    fontFamily: fonts.Regular,
    fontSize: 16,
  },
  signUpLink: {
    color: colors.hyperlinkClr,
    fontFamily: fonts.Regular,
    fontSize: 16,
  },

  signInBtnContainer: {
    backgroundColor: colors.lightBlueBtn, 
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

  // moonImage: {
  //   position: 'absolute',
  // }
});
