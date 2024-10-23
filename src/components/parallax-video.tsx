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
  


  function ParallaxVideoCarousel() {
    const width = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = React.useState(0);
    const carouselRef = React.useRef<any>(null);

    const handleVideoTap = (index: number) => {
      debugger;
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ index, animated: true });
      }
    };
    return (
      <View style={{
        height: 130,
        width: width,
      }}>
      <View style={styles.carouselContainer}>
        <Carousel
        ref={carouselRef}
          width={width}
          height={200}
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
            stackInterval:120,
          }}
          renderItem={({ item, index, animationValue }) => {
            const containerStyle = useAnimatedStyle(() => {
              const scale = interpolate(
                animationValue.value,
                [-1, 0, 1],
                [0.8, 2.5, 0.8], 
                Extrapolate.CLAMP
              );
              const translateX = interpolate(
                animationValue.value,
                [ -1,0,1],
                [-width * 0.4, 0, width * 0.4], 
                Extrapolate.CLAMP
              );
              const blurIntensity = interpolate(
                animationValue.value,
                [-1, 0, 1],
                [15, 0, 15], // Adjust blur intensity here
                Extrapolate.CLAMP
              );
  
              return {
                transform: [{ scale }, { translateX }],
                opacity: interpolate(
                  animationValue.value,
                  [-1, 0, 1],
                  [0.5, 1, 0.5],
                  Extrapolate.CLAMP
                ),
                blurIntensity,
              };
            });
  
            const isActive = activeIndex === index;
  
            return (
              <TouchableWithoutFeedback onPress={() => handleVideoTap(index)}>
              <Animated.View style={[styles.itemContainer, containerStyle]}>
                <Video
                  source={item.videoSrc}
                  style={styles.video}
                  resizeMode="cover"
                  paused={!isActive} 
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

  const styles = StyleSheet.create({
    carouselContainer: {
      paddingTop:20,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    itemContainer: {
      paddingLeft:70,
      width: 160, 
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    video: {
      width: '100%',
      height: '100%',
      borderRadius: 10
    },
  });
  