import React from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import {colors} from "../utility/colors";
import {fonts} from "../utility/fonts";

export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
    fontFamily: fonts.SemiBold,
  },
});
