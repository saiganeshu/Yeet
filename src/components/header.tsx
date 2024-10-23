import React from "react";
import { Image, Text,View } from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
const Header = ()=>{
return(
    <View style={{ height: 60,width:'100%',flexDirection: "row", alignItems: "center", justifyContent: "space-between" ,borderBottomWidth:1,borderColor: '#808080'}}>
  <View style={{paddingLeft:10}}>
    <Image source={require('../assets/images/logo-mobile-light.png')} style={{ width: 180, height: 50}} />
  </View>
  <View style={{display:"flex",flexDirection:'row',justifyContent:'space-evenly',width:100}}>
   <FontAwesome name="user" size={24} color="#ce375a" />
   <Icon name="notifications-sharp" size={24} color="#ce375a" />
  </View>
</View>


)
}
export default Header;