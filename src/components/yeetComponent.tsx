import { useState } from "react";
import { Text ,View,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Body from "./body";
export default function YeetCompo(){
    const [isYeetComponent,setIsYeetComponent] = useState<any>(true);

    const BackToHomePage = ()=>{
      setIsYeetComponent(false);
    }
    return(
      isYeetComponent?(
        <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 30, width: 370,marginLeft:10 }}>
          <Text style={{color:"#000000",fontWeight:'bold'}}>2024 Budget Discussions in Loksabha</Text>
          <TouchableOpacity onPress={BackToHomePage}>
          <Icon name="arrow-back-circle-outline" size={30} color="#a30d0d"  />
          </TouchableOpacity>
        </View>
      </View>
      ):(<Body/>)
    )
}