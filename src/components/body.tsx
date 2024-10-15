import { useRef, useState } from "react";
import { StyleSheet, Text, View,ScrollView, Dimensions, FlatList, Animated } from "react-native";
import Video from "react-native-video";
import Carousel from "react-native-reanimated-carousel";
const Body = ()=>{

  return(
    <ScrollView>
    <View style={{height:400,width:'100%'}}>
    <View>
        <Text>2024 Budget Discussions in Loksabha</Text>
        <View style={{display:"flex",flexDirection:'row'}}>
      <Video
        source={require('../assets/videos/t-1.mp4')}
        resizeMode="contain"
        controls={true}
        style={styles.video} // Set style for video
      />
      <Video
        source={require('../assets/videos/t-2.mp4')}
        resizeMode="contain"
        controls={true}
        style={styles.video} // Set style for video
      />
      <Video
        source={require('../assets/videos/t-3.mp4')}
        resizeMode="contain"
        controls={true}
        style={styles.video} // Set style for video
      />
    </View>
    </View>
    </View>
    </ScrollView>
)
}

const styles = StyleSheet.create({
    video: {
      width: '100%', // Makes video full width of its container
      height: 200,   // You can adjust the height as needed
    },
  });
export default Body;