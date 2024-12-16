import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";

export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.topDesign}>
            <TouchableOpacity 
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
            >
            <Ionicons 
                name={"arrow-back-outline"} 
                size={24}
                color={colors.white}
             />
            </TouchableOpacity>
        </View>

        {/* <Image 
          source={require('../assets/moon.png')} 
          style={styles.astronaut}
        /> */}
          
      <Text style={styles.title}>SIGN IN</Text>
      {/* Add your sign in form components here */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.Bold,
    marginTop: 150,
  },
  backButton: {
    backgroundColor: colors.lightBlueBtn,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 20,
  },
  topDesign: {
    position: 'absolute',
    backgroundColor: colors.lightBlueMid, 
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 30,
    minWidth: '100%',
    height: 'auto',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingBottom: 15,
  }
});
