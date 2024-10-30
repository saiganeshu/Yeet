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
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:0}}>
           <View  style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:190}}>
                <TouchableOpacity style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                <AntDesign name="like1" size={25} color="#000000" />   
                <Text style={{paddingTop:5}}>45</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                <FontAwesome6 name="bomb" size={25} color="#000000" />
                <Text  style={{paddingTop:5}}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{display:'flex',flexDirection:'row'}}>
                <MaterialIcons name="groups" size={30} color="#000000" />
                <Text  style={{paddingTop:5}}>25</Text>
                </TouchableOpacity>
           </View>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',paddingRight:15}}>
                <TouchableOpacity onPress={onPressY}>
                    <Text style={styles.yButtonText}>Y</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
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
            <View style={styles.modalOverlay}>
                
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <View style={styles.modalContent}>
            
                <TouchableOpacity style={styles.modalButton} onPress={handlePickFile}>
                <Text style={styles.modalButtonText}>Yeet Offline</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={handleSimpleButtonPress}>
                <Text style={styles.modalButtonText}>Yeet  Online</Text>
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
    yButtonText: {
      color: "#000000",
      paddingRight: 5,
      fontSize: 20,
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    //   backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 10,
      width: "80%",
      position: "relative",
    },
    modalButton: {
      backgroundColor: "#ce375a",
      padding: 15,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    modalButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    closeButton: {
        alignSelf: "flex-end",
        padding: 5,
      },
      closeButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
      },
  });