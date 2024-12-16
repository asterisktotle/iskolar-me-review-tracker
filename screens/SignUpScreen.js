import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";

export default function SignUpScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      {/* Add your sign up form components here */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  title: {
    fontSize: 24,
    color: colors.white,
    fontFamily: fonts.SemiBold,
  },
});
