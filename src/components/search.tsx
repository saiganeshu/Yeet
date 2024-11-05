import { Text, View } from "react-native";
import Header from "./header";
import React from "react";

 export default function Search(){
    return(
        
        <View>
            <Header/>
            <View className="h-[50px] w-[100px] justify-center items-center">
                <Text className="font-bold text-black">
                    Search Component
                </Text>
            </View>
        </View>
    )
 }