import { useEffect, useState } from "react";
import { Text ,View,TouchableOpacity, ScrollView, Dimensions, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Body from "./body";
import Video from "react-native-video";
import YeetUserActions from "./yeetUserAction";

export default function YeetVideos(){

    const [isYeetComponent,setIsYeetComponent] = useState<any>(true);
    const [paused, setPaused] = useState(false);
    const [visibleVideosRow1, setVisibleVideosRow1] = useState([2, 3, 4]);
    const [visibleVideosRow3, setVisibleVideosRow3] = useState([0, 1, 2]);
    const [nextVideoIndex, setNextVideoIndex] = useState(3);
    const [middleVideoIndex, setMiddleVideoIndex] = useState<number | null>(null);
    const screenWidth = Dimensions.get('window').width;

    // Dynamic video list
    const [videos, setVideos] = useState<any[]>([]);

    useEffect(() => {
        // Assume we dynamically fetch or load the video list
        const fetchedVideos = [
            require('../assets/videos/t-1.mp4'),
            require('../assets/videos/t-2.mp4'),
            require('../assets/videos/t-3.mp4'),
            require('../assets/videos/t-4.mp4'),
            require('../assets/videos/t-5.mp4'),
        ];
        setVideos(fetchedVideos);
    }, []);

    const BackToHomePage = ()=>{
      setIsYeetComponent(false);    
    }

    
  // Rotate Row 3 every 10 seconds, moving the first video to the middle row
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleVideosRow3((prevRow3) => {
        // Move each video position one to the left and add the next video at the end
        const newRow3 = [
          prevRow3[1],
          prevRow3[2],
          nextVideoIndex % videos.length, // Cyclic index to loop back to the start
        ];

        // Set the middle video to the first video in Row 3
        setMiddleVideoIndex(prevRow3[0]);

        // Update the next video index, looping back to 0 if at the end of videos
        setNextVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);

        return newRow3;
      });
    }, 30000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [videos.length, nextVideoIndex]);



   // Move middle video to Row 1's starting position after 10 seconds
   useEffect(() => {
    if (middleVideoIndex !== null) {
      const timer = setTimeout(() => {
        setVisibleVideosRow1((prevRow1) => [middleVideoIndex, prevRow1[0], prevRow1[1]]);
        setMiddleVideoIndex(null); // Clear middle video after moving it to Row 1
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [middleVideoIndex]);


    const handleVideoEnd = (videoIndex:any, row:any) => {
      if (row === 1) {
        setVisibleVideosRow1((prevVisible) =>
          prevVisible.map((index, i) => (i === videoIndex ? (index + 1) % videos.length : index))
        );
      } else {
        setVisibleVideosRow3((prevVisible) =>
          prevVisible.map((index, i) => (i === videoIndex ? (index + 1) % videos.length : index))
        );
      }
    };
    return (
      isYeetComponent ? (
        <View>
          <ScrollView>
            <View className="flex-row justify-between items-center h-[40px] w-full m-[10px] pr-[30px]">
              <Text className="text-black font-bold">2024 Budget Discussions in Loksabha</Text>
              <TouchableOpacity onPress={BackToHomePage}>
                <Icon name="arrow-back-circle-outline" size={30} color="#a30d0d" />
              </TouchableOpacity>
            </View>

            <View className="h-[800px] w-[screenWidth - 20] border-custom-gray m-[10px] border-t border-x border-x border-y-0">
              <View className="m-[10px]">
                {/* Row 1 */}
                <View className="h-[63px] w-full border-custom-gray mb-[5px] flex-row justify-evenly">
                  {visibleVideosRow1.map((index, i) => (
                    <Video
                      key={`row1-${index}-${i}`}
                      source={videos[index]}
                      className="h-[60px] w-[115px]"
                      resizeMode="cover"
                      paused={paused}
                    />
                  ))}
                </View>

                {/* Middle Row */}
                <View className="h-[180px] w-full border-custom-gray mb-[5px] justify-center items-center">
                  {middleVideoIndex !== null && (
                    <Video
                      key={`middle-${middleVideoIndex}-${Date.now()}`} // Unique key for rerender
                      source={videos[middleVideoIndex]}
                      className="h-[180px] w-[screenWidth-40]"
                      resizeMode="cover"
                      paused={false} // Ensure playing status
                      onError={(error) => console.error('Middle video error:', error)}
                    />
                  )}
                </View>

                {/* uservideo */}
                <Video 
                source={require('../assets/videos/t-1.mp4')} 
                className="w-[screenWidth-40] h-[180px] mb-[5px]"
                resizeMode="cover" 
                paused={false}
                repeat={true}
              />



                {/* Row 3 */}
                <View className="h-[63px] w-full border-custom-gray mb-[5px] flex-row justify-evenly ">
                  {visibleVideosRow3.map((index, i) => (
                    <Video
                      key={`row3-${index}-${i}`}
                      source={videos[index]}
                      className="h-[60px] w-[115px]"
                      resizeMode="cover"
                      paused={paused}
                      onEnd={() => handleVideoEnd(i, 2)}
                    />
                  ))}
                </View>
              </View>
              <YeetUserActions/>
            </View>
          </ScrollView>
        </View>
      ) : (
        <Body />
      )
    );
}