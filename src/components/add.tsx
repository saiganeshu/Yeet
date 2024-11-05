import { Text, View } from "react-native";
import Header from "./header";
import Body from "./body";
import tw from 'tailwind-rn';
export default function YourComponent() {
    return (
        <View>
            <Header />
            <View className="h-12 w-full flex justify-center items-center">
                <Text className="font-bold text-black">
                    Add Component
                </Text>
            </View>
        </View>
    );
}