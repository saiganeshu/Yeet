/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  StyleSheet
} from 'react-native';
import 'react-native-reanimated';
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
enableScreens();
const Tab = createBottomTabNavigator();
function App(){
  return (

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
        <Tab.Screen name="Home" component={Header} options={{
          tabBarIcon:({focused})=>(
          <Entypo name="home" size={20} color="#70030e" />
          )
        }}/>
        <Tab.Screen name="Add" component={Body} options={{
          tabBarIcon:({focused})=>(
          <MaterialIcons name="add" size={30} color="#70030e" />
          )
        }} />
        <Tab.Screen name="Group" component={Footer} options={{
          tabBarIcon:({focused})=>(
          <Icon name="people" size={30} color="#70030e"/>
          )
        }}/>
        <Tab.Screen name="Search" component={Body} options={{
          tabBarIcon:({focused})=>(
          <Icon name="search" size={30} color="#70030e"/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
});

export default App;
