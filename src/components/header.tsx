import React from "react";
import { Image, Text,View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = ()=>{
return(
    <View style={{ height: 100, margin: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
  <View>
    <Image source={require('../assets/images/logo-mobile-light.png')} style={{ width: 200, height: 50 }} />
  </View>
  <View style={{display:"flex",flexDirection:'row',justifyContent:'space-evenly',width:100}}>
   <FontAwesome name="user" size={30} color="#70030e" />
   <Icon name="notifications-sharp" size={30} color="#70030e" />
  </View>
</View>


)
}
export default Header;