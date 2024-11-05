import { Text, View } from "react-native";
import Header from "./header";
import React from "react";

 export default function Search(){
    return(
        
        <View>
            <Header/>
            {/* <View style={{height: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}> */}
            <View className="h-50 w-100 justify-center items-center">
                <Text style={{fontWeight: 'bold', color: '#000000'}}>
                    Search Component
                </Text>
            </View>
        </View>
    )
 }