import { useEffect, useState } from "react";
import { Text ,View,TouchableOpacity, ScrollView, Dimensions, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Body from "./body";
import Video from "react-native-video";
export default function YeetCompo(){

    const [isYeetComponent,setIsYeetComponent] = useState<any>(true);
    const [paused, setPaused] = useState(false);
    const [visibleVideosRow1, setVisibleVideosRow1] = useState([0, 1, 2]);
    const [visibleVideosRow2, setVisibleVideosRow2] = useState([3, 4, 0]);
    const screenWidth = Dimensions.get('window').width;

    const videos: any[] = [
      require('../assets/videos/t-1.mp4') ,
      require('../assets/videos/t-2.mp4') ,
      require('../assets/videos/t-3.mp4') ,
      require('../assets/videos/t-4.mp4') ,
      require('../assets/videos/t-5.mp4') ,
    ];

    const BackToHomePage = ()=>{
      setIsYeetComponent(false);    
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setVisibleVideosRow1((prevVisible) => {
          return prevVisible.map((index) => {
            // Decrement the index for left-to-right flow
            const newIndex = (index - 1 + videos.length) % videos.length;
            return newIndex;
          });
        });
      }, 10000); // 10 seconds
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    useEffect(() => {
      const interval = setInterval(() => {
        setVisibleVideosRow2((prevVisible) => {
          return prevVisible.map((index) => {
            // Increment the index for right-to-left flow
            const newIndex = (index + 1) % videos.length;
            return newIndex;
          });
        });
      }, 10000); // 10 seconds
  
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);
    
    return(
      isYeetComponent?(
        <View>
          <ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 40, width: '100%',margin:10,paddingRight:30 }}>
          <Text style={{color:"#000000",fontWeight:'bold'}}>2024 Budget Discussions in Loksabha</Text>
          <TouchableOpacity onPress={BackToHomePage}>
          <Icon name="arrow-back-circle-outline" size={30} color="#a30d0d"  />
          </TouchableOpacity>
        </View>
        <View style={{height:800,width:screenWidth-20,borderColor:'#808080',margin:10,borderTopWidth: 1,  
          borderLeftWidth: 1, 
          borderRightWidth: 1, 
          borderBottomWidth: 0,}}>
            <View style={{ margin: 10 }}>
            <View style={{ height: 63, width: '100%', borderColor: '#808080', marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            {visibleVideosRow1.map((index) => (
                  <Video
                    key={index}
                    source={videos[index]}
                    style={{ height: 60, width: 115 }}
                    resizeMode="cover"
                    paused={paused}
                    onError={(error) => console.error(`Video error: ${error}`)} 
                  />
                ))}
              </View>
              <View style={{ height: 150, width: '100%', borderColor: '#808080', borderWidth: 1, marginBottom: 5}}></View>
              <View style={{ height:63, width: '100%', borderColor: '#808080', marginBottom:5,display:'flex',flexDirection:'row',justifyContent:'space-evenly' }}>
              {visibleVideosRow2.map((index) => (
                  <Video
                    key={index}
                    source={videos[index]}
                    style={{ height: 60, width: 115 }}
                    resizeMode="cover"
                    paused={paused}
                    onError={(error) => console.error(`Video error: ${error}`)} 
                  />
                ))}
              </View>
            </View>

        </View>
        </ScrollView>
      </View>
      ):(<Body/>)
    )
}