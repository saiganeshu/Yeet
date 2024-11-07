import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import Header from "./header";
import DocumentPicker, { DocumentPickerResponse } from "react-native-document-picker";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";
import { useState } from "react";

export default function Add() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFile, setSelectedFile] = useState<DocumentPickerResponse | null>(null);

    // const handlePickFile = async () => {
    //     try {
    //         const res = await DocumentPicker.pick({
    //             type: [DocumentPicker.types.video],
    //         });
            
    //         setSelectedFile(res[0]);
    //         setModalVisible(true);
    //         console.log(res[0], 'Selected file');
    //         Alert.alert("File Selected", `You selected: ${res[0].name}`);

    //         const formData = new FormData();
    //         formData.append('file', {
    //             uri: res[0].uri,
    //             type: res[0].type,
    //             name: res[0].name,
    //         });

    //         // Additional metadata matching the backend schema
    //         formData.append('comment', JSON.stringify([{ comment: "Great video!", dateTime: new Date() }]));
    //         setIsLoading(true); 
    //         try {
    //             const response = await axios.post('http://10.0.2.2:3000/api/upload', formData, {
    //                 headers: {
    //                     'Content-Type': 'multipart/form-data',
    //                 },
    //             });
    //             console.log('File uploaded successfully:', response.data);
    //         } catch (error) {
    //             console.error('Error uploading file:', error);
    //             Alert.alert("Upload Error", "Failed to upload the file.");
    //         }
    //         finally {
    //             setIsLoading(false); // Stop loading
    //             setModalVisible(false); // Hide modal
    //             setSelectedFile(null); // Reset selected file
    //         }
    //     } catch (err) {
    //         if (DocumentPicker.isCancel(err)) {
    //             Alert.alert("Canceled", "File selection was canceled");
    //         } else {
    //             Alert.alert("Error", "An error occurred while selecting the file");
    //             console.error('File selection error:', err);
    //         }
    //     }
    // };

    const handlePickFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.video],
            });
            
            // Save the selected file to state and show modal
            setSelectedFile(res[0]);
            setModalVisible(true); // Show the modal
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                Alert.alert("Canceled", "File selection was canceled");
            } else {
                Alert.alert("Error", "An error occurred while selecting the file");
                console.error('File selection error:', err);
            }
        }
    };


    const handleUploadFile = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', {
            uri: selectedFile.uri,
            type: selectedFile.type,
            name: selectedFile.name,
        });

        formData.append('comment', JSON.stringify([{ comment: "Great video!", dateTime: new Date() }]));
        formData.append('title', title);  
        formData.append('description', description); 
        setIsLoading(true); // Start loading
        try {
            const response = await axios.post('http://10.0.2.2:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            Alert.alert("Success", "File uploaded successfully!");
        } catch (error) {
            console.error('Error uploading file:', error);
            Alert.alert("Upload Error", "Failed to upload the file.");
        } finally {
            setIsLoading(false); 
            setModalVisible(false); 
            setSelectedFile(null); 
            setTitle('');
            setDescription('');
        }
    };

    const handleCancelUpload = () => {
        setModalVisible(false);
        setSelectedFile(null); 
        setTitle('');
        setDescription('');
        Alert.alert("Upload Failed", "The upload was canceled.");
    };

    return (
        <View className="flex-1 flex flex-col">
            <View className="flex-1">
                <Header />
            </View>
            <View>
                <View className="justify-end bg-white p-6 rounded-lg items-center">
                    <TouchableOpacity
                        className="flex flex-row gap-2 justify-center bg-blue-500 p-2 rounded-lg mb-4 w-full items-center"
                        onPress={handlePickFile}
                    >
                        <AntDesignIcon name="upload" size={15} color="#fafafa" />
                        <Text className="text-base text-white font-bold">Upload</Text>
                    </TouchableOpacity>
                </View>
            </View>

             {/* Confirmation Modal */}
             <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-black/50">
                    <View className="h-100 w-72 p-5 bg-white rounded-lg">
                        <Text className="text-lg font-bold mb-2.5 text-black">Title</Text>
                        <TextInput className="h-20 border border-gray-400 p-2 rounded text-top mb-2.5"
                            placeholder="Enter title"
                            maxLength={100}
                            multiline
                            value={title}
                            onChangeText={(text) => setTitle(text)}
                        />
                       <Text className="text-lg font-bold mb-2.5 text-black">Description</Text>
                        <TextInput
                            className="h-24 border border-gray-400 p-2 rounded text-top mb-2.5"
                            placeholder="Enter description"
                            maxLength={300}
                            multiline
                            value={description}
                            onChangeText={(text) => setDescription(text)}
                        />
                        <View className="flex flex-row justify-between">
                            <TouchableOpacity
                                className="p-2.5 bg-[#FF6B6B] rounded"
                                onPress={handleCancelUpload}
                            >
                                <Text className="text-white">Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                className="p-2.5 bg-[#4CAF50] rounded"
                                onPress={handleUploadFile}
                            >
                                <Text className="text-white">Post</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}