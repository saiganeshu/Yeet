import * as React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
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
  


  function ParallaxVideoCarousel() {
    const width = 300;
    const [activeIndex, setActiveIndex] = React.useState(0);
  
    return (
      <View>
        <Carousel
          width={350}
          height={250}
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
            stackInterval:110,
          }}
          renderItem={({ item, index, animationValue }) => {
            const containerStyle = useAnimatedStyle(() => {
              const scale = interpolate(
                animationValue.value,
                [-1, 0, 1],
                [0.6, 1, 0.6], 
                Extrapolate.CLAMP
              );
              const translateX = interpolate(
                animationValue.value,
                [-1, 0, 1],
                [-width * 0.2, 0, width * 0.2], 
                Extrapolate.CLAMP
              );
  
              return {
                transform: [{ scale }, { translateX }],
              };
            });
  
            const isActive = activeIndex === index;
  
            return (
              <Animated.View style={[styles.itemContainer, containerStyle]}>
                <Video
                  source={item.videoSrc}
                  style={styles.video}
                  resizeMode="cover"
                  paused={!isActive} 
                  repeat={true} 
                  controls={false} 
                />
              </Animated.View>
            );
          }}
        />
      </View>
    );
  }
  
  export default ParallaxVideoCarousel;

  const styles = StyleSheet.create({
    itemContainer: {
      width: '50%',
      height: '35%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      width: '100%',
      height: '100%',
      borderRadius: 10, 
    },
  });
  