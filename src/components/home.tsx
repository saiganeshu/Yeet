import { ScrollView, View } from "react-native";
import Header from "./header";
import Body from "./body";

 export default function Home(){
    return(
    
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>
                <Body/>
            </ScrollView>
            
        </View>
    )
 }