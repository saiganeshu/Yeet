import { Text, View } from "react-native";
import Header from "./header";
import Body from "./body";

 export default function Add(){
    return(
        
        <View>
            <Header/>
            <View style={{height: 50, width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', color: '#000000'}}>
                    Add Component
                </Text>
            </View>
        </View>
    )
 }