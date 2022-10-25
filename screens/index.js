import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView
} from 'react-native';
import icons from '../constants/icons'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Onboarding from './Onboarding';
import Detail from './Detail';
import Maps from './Maps';
import User from './User';
import Search from './Search';
import flightTicket from './flightTicket';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '../constants/images';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { Colors } from 'react-native/Libraries/NewAppScreen';




const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator screenOptions={/*{ headerShown: false }*/({route})=>({
        headerShown:false,
        tabBarIcon:({focused})=>{
          const tinColor=focused ? "#5390ff" : "gray";
          switch(route.name){
            case "Home":
              return(
                <Image 
                  source={icons.home} 
                  style={{
                    width: 30, 
                    height: 30, 
                    tintColor:tinColor}} 
                  resizeMode="stretch"/>
              )
              case "Search":
              return(
                <Image 
                  source={icons.search} 
                  style={{
                    width: 30, 
                    height: 30, 
                    tintColor:tinColor}} 
                  resizeMode="stretch"/>
              )
              case "Maps":
              return(
                <Image 
                  source={icons.bookMark} 
                  style={{
                    width: 30, 
                    height: 30, 
                    tintColor:tinColor}} 
                  resizeMode="stretch"/>
              )
              case "User":
              return(
                <Image 
                  source={icons.user} 
                  style={{
                    width: 30, 
                    height: 30, 
                    tintColor:tinColor}} 
                  resizeMode="stretch"/>
              )
          }
        }
      })}>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Search" component={Search}/>
        <Tab.Screen name="Maps" component={Maps}/>
        <Tab.Screen name="User" component={User}/>
        
      </Tab.Navigator>
    )
}

const Stack = createNativeStackNavigator();
export default RootComponent = function () {
    return (
      <NavigationContainer>
        {/* Rest of your app code */}
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeTabs" component={MyTabs} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="flightTicket" component={flightTicket} />
          <Stack.Screen name="Onboarding" component={Onboarding} /*options={{title: null, headerStyle:{backgroundColor:"white"}}}*/ />
          
        </Stack.Navigator>
      </NavigationContainer>
    )
}