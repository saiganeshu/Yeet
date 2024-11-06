import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from './components/home';
import Add from './components/add';
import Group from './components/group';
import Search from './components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
export  const MainPage = () => {
  return (
    <>
    <NavigationContainer>
             <Tab.Navigator screenOptions={{
              tabBarActiveTintColor:'#8f0114',
              tabBarInactiveTintColor:'#0d0d0d',
              tabBarLabelStyle:{
              fontSize:14,
              fontWeight:'bold',
              paddingBottom:3
        }
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:({})=>(
          <Entypo name="home" size={24} color="#ce375a" />
          ), headerShown: false 
        }}/>
        <Tab.Screen name="Add" component={Add} options={{
          tabBarIcon:({})=>(
          <MaterialIcons name="add" size={24} color="#ce375a" />
          ), headerShown: false 
        }} />
        <Tab.Screen name="Group" component={Group} options={{
          tabBarIcon:({})=>(
          <Ionicons name="people" size={24} color="#ce375a"/>
          ), headerShown: false 
        }}/>
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon:({})=>(
          <Ionicons name="search" size={24} color="#ce375a"/>
          ), headerShown: false 
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
    </>
  )
}
