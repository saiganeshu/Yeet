import { Text, View } from "react-native";
import Header from "./header";

 export default function Search(){
    return(
        
        <View>
            <Header/>
            <View className="h-12 w-full justify-center items-center">
                <Text className="font-bold text-black">
                    Search Component
                </Text>
            </View>
        </View>
    )
 }