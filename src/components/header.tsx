import React from "react";
import tailwind from 'tailwind-rn';
import { Image, View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View className="h-16 w-full flex-row items-center justify-between border-b border-gray-400">
      <View className="pl-2.5">
        <Image source={require('../assets/images/logo-mobile-light.png')} className="w-44 h-12" />
      </View>
      <View className="flex flex-row justify-evenly w-24">
        <FontAwesome name="user" size={24} color="#ce375a" />
        <Icon name="notifications-sharp" size={24} color="#ce375a" />
      </View>
    </View>
  );
}

export default Header;
