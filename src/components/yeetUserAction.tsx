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
        <View className="flex flex-row justify-between m-0">
           <View className="flex flex-row justify-evenly w-[190px]">
                <TouchableOpacity className="flex flex-row justify-evenly">
                <AntDesign name="like1" size={25} color="#000000" />   
                <Text className="pt-[5px]">45</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row">
                <FontAwesome6 name="bomb" size={25} color="#000000" />
                <Text className="pt-[5px]">25</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex flex-row">
                <MaterialIcons name="groups" size={30} color="#000000" />
                <Text className="pt-[5px]">25</Text>
                </TouchableOpacity>
           </View>
           <View className="flex flex-row justify-between pr-[15px]">
                <TouchableOpacity onPress={onPressY}>
                    {/* <Text style={styles.yButtonText}>Y</Text> */}
                    <Text className="text-black pr-[5px] text-[20px]">Y</Text>
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
            <View className="flex-1 justify-center items-center">
                
            <TouchableOpacity className="self-end p-[5px]"onPress={() => setIsModalVisible(false)}>
              <Text className="text-[18px] font-bold text-black">X</Text>
            </TouchableOpacity>
            <View className="flex-row justify-around items-center text-white p-[20px] rounded-[10px] w-4/5 relative">
            
                <TouchableOpacity className="bg-[#ce375a] p-[15px] rounded-[5px] mx-[10px]" onPress={handlePickFile}>
                <Text className="text-white text-[16px] font-bold">Yeet Offline</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#ce375a] p-[15px] rounded-[5px] mx-[10px]" onPress={handleSimpleButtonPress}>
                <Text className="text-white text-[16px] font-bold">Yeet  Online</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Modal>
        </View>
    )
}



const styles = StyleSheet.create({
    actionButton: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    actionText: {
      paddingTop: 5,
    },
  });