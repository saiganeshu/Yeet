import React from "react";
import { Image, Text,View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = ()=>{
return(
<View className="h-20 w-full flex-row items-center justify-between border-b border-gray-400">
  <View className="pl-2.5">
    <Image source={require('../assets/images/logo-mobile-light.png')} className="w-44 h-12" />
  </View>
  <View className="flex flex-row justify-between w-20 pr-2.5">
  <FontAwesome name="user" size={24} color="#ce375a" />
   <Icon name="notifications-sharp" size={24} color="#ce375a" />
  </View>
</View>


)
}
export default Header;