import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CreateTripContext } from "../context/CreateTripContext";

export default function RootLayout() {

  useFonts({
    'outfit':require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('./../assets/fonts/Outfit-Bold.ttf'),
  })

  const [tripData, setTripData] =useState([]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <CreateTripContext.Provider value={{tripData, setTripData}}>
    <Stack screenOptions={{
      headerShown:false,
      }}>
      {/* <Stack.Screen name="index" options={{
        headerShown:false
      }}/> */}
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </CreateTripContext.Provider>
    </GestureHandlerRootView>
  );
}
