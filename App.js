import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from "./screens/SignUpScreen";
import AppHome from "./screens/AppHome";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseConfig";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
  
    return unsubscribe; 
  }, []);
  
  if (initializing) return null;
  
  return (
    <NavigationContainer> 
  <Stack.Navigator screenOptions={{headerShown: false}}>
    {!user ? (
      //Non-authenticated stack
      <>
      <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="SignIn" component={SignInScreen}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
      </>
    ):
    //Authenticated stack
    <>
    <Stack.Screen name="AppHome" component={AppHome}/>
    <Stack.Screen name="Home" component={HomeScreen}/>
    </>
    }

  </Stack.Navigator>
</NavigationContainer>
  );
}


