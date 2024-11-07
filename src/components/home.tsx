import { Dimensions, ScrollView, View } from "react-native";
import Header from "./header";
import Body from "./body";

 export default function Home(){
    const screenWidth = Dimensions.get('window').width;
    return(
    
        <View style={{width:screenWidth}} className="flex">
            <Header/>
            <ScrollView>
                <Body/>
            </ScrollView>
            
        </View>
    )
 }