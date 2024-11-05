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
import Body from './src/components/body';
import Add from './src/components/add';
import Group from './src/components/group';
import Home from './src/components/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './src/components/search';
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
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon:()=>(
          <Entypo name="home" size={24} color="#ce375a" />
          ), headerShown: false 
        }}/>
        <Tab.Screen name="Add" component={Add} options={{
          tabBarIcon:()=>(
          <MaterialIcons name="add" size={24} color="#ce375a" />
          ), headerShown: false 
        }} />
        <Tab.Screen name="Group" component={Group} options={{
          tabBarIcon:()=>(
          <Icon name="people" size={24} color="#ce375a"/>
          ), headerShown: false 
        }}/>
        <Tab.Screen name="Search" component={Search} options={{
          tabBarIcon:()=>(
          <Icon name="search" size={24} color="#ce375a"/>
          ), headerShown: false 
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
