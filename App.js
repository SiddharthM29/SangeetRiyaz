import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Linking } from 'react-native-web';
import {Dimensions} from 'react-native';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import PitchTracker from "react-native-pitch-tracker";
//import React, { Component } from 'react'; 
//import { AppRegistry, StyleSheet, Text, View } from 'react-native'; 
//import Audio from 'react-native-audio';
//import { Piano } from 'react-native-piano';
import Navbar from './Src/Navbar.js';
import Temp from './Src/Temp';
import Record from './Src/Record'
import Piano from './Src/Record'
const Stack = createNativeStackNavigator();
export default function App() {
  
  
  return (
    
    <NavigationContainer>
     <Stack.Navigator initialRouteName="Navbar" >
      <Stack.Screen  name="Sangeet Riyaz"  component={Navbar} />
      <Stack.Screen name="Record" component={Record} />
      <Stack.Screen name="Temp" component={Temp}  /> 
      <Stack.Screen name='Piano' componenet={Piano} />
    </Stack.Navigator>
    </ NavigationContainer>
  );
} 













