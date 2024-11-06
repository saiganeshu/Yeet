import React, { memo } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'

type uploadFileProps = {
    isModalVisible: boolean
    setIsModalVisible:(isModalVisible:boolean)=> void
}
export const UploadFileModal = memo(({isModalVisible,setIsModalVisible,}:uploadFileProps) =>{
    
  return (
    <>
    <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
        >
            <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
                <TouchableOpacity className="absolute top-5 right-5 p-2 rounded-full bg-white" onPress={() => setIsModalVisible(false)}>
                    <Text className="text-lg font-bold">X</Text>
                </TouchableOpacity>
                <View className="bg-white p-6 rounded-lg items-center">
                    <TouchableOpacity className="bg-blue-500 p-4 rounded-lg mb-4 w-full items-center">
                        <Text className="text-white text-lg font-semibold">Yeet Offline</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-green-500 p-4 rounded-lg w-full items-center">
                        <Text className="text-white text-lg font-semibold">Yeet Online</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </>
  )
},
arePropsEqual,
)


function arePropsEqual(prevProps:uploadFileProps, nextProps:uploadFileProps ) {
    return (
      JSON.stringify(prevProps.isModalVisible) === JSON.stringify(nextProps.isModalVisible)
    )
  }