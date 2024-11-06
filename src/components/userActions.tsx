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
    <View className="mb-[5px] flex flex-row justify-evenly items-center pt-[10px]">
            <View >
              <TouchableOpacity className="flex-row items-center ml-[5px]">
              <EvilIcons name="like" size={25} color="#000000" />     
              <Text className="text-black">Like</Text>
              </TouchableOpacity>
              </View>
            <View>
            <TouchableOpacity className="flex-row items-center">
              <EvilIcons name="comment" size={25} color="#000000" /> 
              <Text className="text-black">Comment</Text>
              </TouchableOpacity >
            </View>
            <View>
              <TouchableOpacity onPress={handleReplaceComponent} className="flex-row items-center">
                <Text className="text-black pr-[5px] text-[17px]">Y</Text>
                <Text className="txt-black">Yeet</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row items-center">
            <TouchableOpacity className="flex-row items-center">
              <Entypo name="share" size={15} color="#000000" />
              <Text className="text-black pl-[5px]">Share</Text>
            </TouchableOpacity>
            </View> 
          </View>

)
}