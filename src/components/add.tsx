import { Alert, Text, TouchableOpacity, View } from "react-native";
import Header from "./header";
import DocumentPicker from "react-native-document-picker";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import axios from "axios";

export default function Add() {
    const handlePickFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.video],
            });

            console.log(res[0], 'Selected file');
            Alert.alert("File Selected", `You selected: ${res[0].name}`);

            const formData = new FormData();
            formData.append('file', {
                uri: res[0].uri,
                type: res[0].type,
                name: res[0].name,
            });

            // Additional metadata matching the backend schema
            formData.append('comment', JSON.stringify([{ comment: "Great video!", dateTime: new Date() }]));

            try {
                const response = await axios.post('http://10.0.2.2:3000/api/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                console.log('File uploaded successfully:', response.data);
            } catch (error) {
                console.error('Error uploading file:', error);
                Alert.alert("Upload Error", "Failed to upload the file.");
            }
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                Alert.alert("Canceled", "File selection was canceled");
            } else {
                Alert.alert("Error", "An error occurred while selecting the file");
                console.error('File selection error:', err);
            }
        }
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
        </View>
    );
}