import * as React from 'react';
import { View, StyleSheet, Dimensions,TouchableWithoutFeedback} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Video from 'react-native-video';
import Animated, {
  interpolate,
  useAnimatedStyle,
  Extrapolate,
} from 'react-native-reanimated';

interface CarouselItem {
    id: number;
    videoSrc: any; 
  }
  
  const carouselData: CarouselItem[] = [
    { id: 1, videoSrc: require('../assets/videos/t-1.mp4') },
    { id: 2, videoSrc: require('../assets/videos/t-2.mp4') },
    { id: 3, videoSrc: require('../assets/videos/t-3.mp4') },
    { id: 4, videoSrc: require('../assets/videos/t-4.mp4') },
    { id: 5, videoSrc: require('../assets/videos/t-5.mp4') },
  ];
  
  function  ParallaxVideoCarousel() {
    
    const width = Dimensions.get('window').width;
    const videoSize = 60;
    const [activeIndex, setActiveIndex] = React.useState(0);
    const carouselRef = React.useRef<any>(null);

    function handleVideoPress (index: number)  {
      if (carouselRef.current) {
        debugger;
        carouselRef.current.scrollTo({ index, animated: true });
        setActiveIndex(index); 
      }
    };

    return (
      <View className="h-36 pt-7" style={{ width: width }}>
      <View className="pt-10 justify-center items-center">
        <Carousel
          ref={carouselRef}
          width={width}
          height={130}
          data={carouselData}
          autoPlay={true}
          autoPlayInterval={5000}
          scrollAnimationDuration={1000}
          onSnapToItem={(index) => {
          setActiveIndex(index);
          }}
          mode="horizontal-stack"
          modeConfig={{
            snapDirection: 'left',
            stackInterval:80,
          }}
          renderItem={({ item, index, animationValue }) => {
            const containerStyle = useAnimatedStyle(() => {
              const scale = interpolate(
                animationValue.value,
                [-1, 0, 1],
                [0.8, 1, 0.8], 
                Extrapolate.CLAMP
              );
              const translateX = interpolate(
                animationValue.value,
                [ -1,0,1],
                [-width * 0.1, 0, width * 0.1], 
                Extrapolate.CLAMP
              );
  
              return {
                transform: [{ scale }, { translateX }],
                opacity: interpolate(
                  animationValue.value,
                  [-1, 0, 1],
                  [0.1, 1, 0.1],
                  Extrapolate.CLAMP
                ),
              };
            });
  
            const isActive = activeIndex === index;
  
            return (
              <TouchableWithoutFeedback onPress={()=>{
                console.log(index);
                handleVideoPress(index)}}>
               <Animated.View
                  style={[
                    containerStyle,
                    {
                      width: videoSize,
                      height: videoSize,
                      borderRadius: videoSize / 2,
                      overflow: 'hidden', // Crop the video to make it circular
                      justifyContent: 'center',
                      alignItems: 'center',
                    },
                  ]}
                >
                  <Video
                    source={item.videoSrc}
                    style={{ width: videoSize, height: videoSize }}
                    resizeMode="cover"
                    paused={true} // Ensure video is always paused
                    repeat={true}
                    controls={false}
                    muted={true}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
      </View>
    );
  }
  
  export default ParallaxVideoCarousel;

  