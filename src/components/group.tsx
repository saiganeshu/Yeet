import { Text, View } from "react-native";
import Header from "./header";

 export default function Group(){
    return(
        
        <View>
            <Header/>
            <View className="h-12 w-full justify-center items-center">
                <Text className="font-bold text-black">
                    Group Component
                </Text>
            </View>
        </View>
    )
 }