import { Text, View } from "react-native";
import Header from "./header";

 export default function Group(){
    return(
        
        <View>
            <Header/>
            <View style={{height: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', color: '#000000'}}>
                    Group Component
                </Text>
            </View>
        </View>
    )
 }