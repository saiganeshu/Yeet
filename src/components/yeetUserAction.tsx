import { Alert, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import DocumentPicker from "react-native-document-picker";
import { useState } from "react";
export default function YeetUserActions(){


    const [isModalVisible, setIsModalVisible] = useState(false);

    const handlePickFile = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
        Alert.alert("File Selected", `You selected: ${res[0].name}`);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          Alert.alert("Cancelled", "File selection was cancelled.");
        } else {
          Alert.alert("Error", "An error occurred while selecting the file.");
        }
      }
      setIsModalVisible(false); // Close modal after selecting a file
    };
  
    const handleSimpleButtonPress = () => {
      Alert.alert("Action", "Simple button pressed");
      setIsModalVisible(false); // Close modal after action
    };
  
    const onPressY = () => {
      setIsModalVisible(true); // Show modal with buttons
    };
      
    return(
        <View className="flex-row justify-between m-0">
           <View  className="flex-row justify-evenly w-[190px]">
                <TouchableOpacity className="flex-row justify-evenly">
                <AntDesign name="like1" size={25} color="#000000" />   
                <Text className="pt-1">45</Text>
                </TouchableOpacity>
                <TouchableOpacity  className="flex-row">
                <FontAwesome6 name="bomb" size={25} color="#000000" />
                <Text  className="pt-1">25</Text>
                </TouchableOpacity>
                <TouchableOpacity  className="flex-row">
                <MaterialIcons name="groups" size={30} color="#000000" />
                <Text  className="pt-1 pl-1">25</Text>
                </TouchableOpacity>
           </View>
           <View className="flex-row justify-between pr-4">
                <TouchableOpacity onPress={onPressY}>
                    <Text className="text-black pr-1 text-lg">Y</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                <Entypo name="share" size={15} color="#000000" />
                </TouchableOpacity>
           </View>

           
             {/* Custom Modal for buttons */}
             <Modal
  animationType="slide"
  transparent={true}
  visible={isModalVisible}
  onRequestClose={() => setIsModalVisible(false)}
>
  <View className="flex-1 justify-center items-center bg-black/50">    
    <View className="bg-white p-5 rounded-lg w-[80%] max-w-[300px]">
      <TouchableOpacity className="absolute top-2 right-2 p-1" onPress={() => setIsModalVisible(false)}>
        <MaterialIcons name="cancel" size={25} color="#000000" />
      </TouchableOpacity>    
      <View className="flex-row justify-around items-center mt-4 pt-3">
        <TouchableOpacity className="bg-[#ce375a] p-4 rounded-md mx-2" onPress={handlePickFile}>
          <Text className="text-white text-base font-bold">Yeet Offline</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#ce375a] p-4 rounded-md mx-2" onPress={handleSimpleButtonPress}>
          <Text className="text-white text-base font-bold">Yeet Online</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>

        </View>
    )
}