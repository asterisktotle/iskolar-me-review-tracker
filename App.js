// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import {colors} from "./utility/colors"


export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require ("./assets/iskolar.png")} style={styles.logo} />
      <Text style={styles.text}>LEARN BY LOOKSFAM</Text>
      <Image source={require("./assets/rocket.png")} style={styles.rocketImage} />

      <View style={styles.signUpWrapper}>
        <View style={styles.signUpGoogleWrapper}>
          <Text style={styles.signUp}>SIGN UP WITH GOOGLE</Text>
          </View>
        <Text style={styles.signIn}>SIGN IN</Text>
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
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 25 : 0,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'light',
    height:20, 
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
  signUpWrapper: {
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
  signUpGoogleWrapper: {
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
  },
  signIn: {
    fontSize: 18,
    color: colors.white,
    paddingBlock: 10
  }


});
