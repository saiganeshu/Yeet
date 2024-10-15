import React from "react";
import { Image, Text,View } from "react-native";
import UserIcon from "../assets/svg/UserIcon";
const Header = ()=>{
return(
    <View style={{ height: 100, margin: 5, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
  <View>
    <Image source={require('../assets/images/logo-mobile-light.png')} style={{ width: 200, height: 50 }} />
  </View>
  <View>
    <Text style={{ fontWeight: 'bold' }}>Header component</Text>
   <UserIcon/>
  </View>
</View>


)
}
export default Header;