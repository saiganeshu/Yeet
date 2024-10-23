import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import YeetCompo from "./yeetComponent";

export default function UserActions(){

    const [isComponent, setIsComponent] = useState(true);
  
    const handleReplaceComponent = () => {
      setIsComponent(false); 
    };

return( 
    <View style={{ marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',paddingTop:10 }}>
            <View >
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginLeft:5 }}>
              <EvilIcons name="like" size={25} color="#000000" />     
              <Text  style={{ color: '#000000', }}>Like</Text>
              </TouchableOpacity>
              </View>
            <View >
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
              <EvilIcons name="comment" size={25} color="#000000" /> 
              <Text  style={{ color: '#000000', }}>Comment</Text>
              </TouchableOpacity >
            </View>
            <View>
              <TouchableOpacity onPress={handleReplaceComponent} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#000000',paddingRight:5,fontSize:17 }}>Y</Text>
                <Text  style={{ color: '#000000', }}>Yeet</Text>
              </TouchableOpacity>
            </View>
            <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name="share" size={15} color="#000000" />
              <Text  style={{ color: '#000000',paddingLeft:5 }}>Share</Text>
            </TouchableOpacity>
            </View> 
          </View>

)
}