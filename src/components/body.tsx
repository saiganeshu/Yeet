import * as React from 'react';
import { View } from 'react-native';
import ParallaxVideoCarousel from './parallax-video';
function Body() {
    return (
        <View  style={{
            marginLeft: 50,
            marginRight: 30,
            height: 150,
            width: 300,
            borderColor: '#808080', // Black border color
            borderWidth: 1, 
            borderRadius:8,
            overflow: 'hidden', 
          }}>
            <ParallaxVideoCarousel />
        </View>
    );
}

export default Body;