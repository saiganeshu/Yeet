import { ScrollView, View } from "react-native";
import Header from "./header";
import Footer from "./footer";  // Assuming you want to add Footer below the Body

export default function Home() {
    return (
        <View className="flex-1">
            <Header />
            <ScrollView>
                <Body />
            </ScrollView>
            <Footer />  {/* Add Footer component here */}
        </View>
    );
}
