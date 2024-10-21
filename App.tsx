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
function App(){

  return (
    <>
    <Header/>
    <Body/>
    <Footer/> 
    </>     

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
