import  { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import ParallaxVideoCarousel from './parallax-video';
import Video from 'react-native-video';
import UserActions from './userActions';
import Fontisto from "react-native-vector-icons/Fontisto"
import YeetCompo from './yeetComponent';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
function Body() {
  const [paused, setPaused] = useState(false);
  const [isComponent, setIsComponent] = useState(true);
  
  const handleReplaceComponent = () => {
    setIsComponent(false); 
  };

  const handleVideoEnd = () => {
    console.log('Video has finished playing');
    setPaused(true);
  };

  return (
    isComponent?(
    <View>

    <View style={{
      height: 330,
      width: '100%',
      borderColor: '#808080',
      borderBottomWidth: 3,
      overflow: 'hidden',
      paddingTop:5
    }}>
        <View style={{
          height: 330,
          width: '100%',
          overflow: 'hidden',
          paddingLeft:10
        }}>
          <View style={{display:'flex',flexDirection:'row',}}>
          <Image source={require('../assets/images/Ellyse-Perry.png')} style={{ width: 50,
          height: 50,
          borderRadius: 75 / 2,  
          borderWidth: 0.5,        
          borderColor: '#000'}}    />
          <View>
        <Text  style={{ fontWeight: 'bold', color: '#000000',fontSize:12,paddingLeft:10,paddingTop:10}}>Ellyse-Perry</Text>
        <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={{fontSize:10,color: '#fff',backgroundColor:'#ce375a',paddingTop:2,paddingBottom:2,paddingRight:6,paddingLeft:6,borderRadius:4,marginLeft:8}}>Live</Text>
        <View style={{paddingLeft:5,paddingTop:1}}>
        <Fontisto name="world" size={13} color="#000000" />  
        </View> 
        </View>
        </View>
        </View>
          <View style={{ margin: 10,display:'flex',flexDirection:'row',justifyContent:'space-between',height:80,width:'100%' }}>
            <Text style={{ color: '#000000', width:200,fontSize:17 }}>2024 Budget Discussions in Loksabha</Text>
            <View>
            <Image source={require('../assets/images/thumbnail.png')} style={{ width: 150, height:80}} />
            </View>
          </View>

          <View>
            <ParallaxVideoCarousel />
          </View>

          {/* <UserActions/> */}

          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',paddingTop:10 }}>
            <View >
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
              <EvilIcons name="like" size={25} color="#000000" />     
              <Text  style={{ color: '#000000', }}>Like</Text>
              </TouchableOpacity>
              </View>
            <View >
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
              <EvilIcons name="comment" size={25} color="#000000" /> 
              <Text  style={{ color: '#000000', }}>Comment</Text>
              </TouchableOpacity >
            </View>
            <View>
              <TouchableOpacity onPress={handleReplaceComponent} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#000000',paddingRight:5,fontSize:17 }}>Y</Text>
                <Text  style={{ color: '#000000', }}>Yeet</Text>
              </TouchableOpacity>
            </View>
            <View  style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Entypo name="share" size={15} color="#000000" />
              <Text  style={{ color: '#000000',paddingLeft:5 }}>Share</Text>
            </TouchableOpacity>
            </View> 
          </View>
        </View>
    </View>

    <View style={{
          height: 320,
          width: '100%',
          borderColor: '#808080',
          borderBottomWidth: 3,
          overflow: 'hidden',
          paddingTop:10
        }}>
      <View style={{marginLeft:10,marginRight:10,display:'flex',flexDirection:'row'}}>
      <Image source={require('../assets/images/harleen.jpg')} style={{ width: 50,
        height: 50,
        borderRadius: 75 / 2,  
        borderWidth: 0.5,        
        borderColor: '#000'}}    />
        <View>
        <Text  style={{ fontWeight: 'bold', color: '#000000',fontSize:12,paddingLeft:10,paddingTop:10}}>Harleen</Text>
        <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={{fontSize:10,paddingLeft:10,color: '#000000'}}>4d .</Text>
        <View style={{paddingLeft:5,paddingTop:1}}>
        <Fontisto name="world" size={13} color="#000000" />  
        </View> 
        </View>
        </View>
      </View>
      <View>
      <Video
          source={require('../assets/videos/t-3.mp4')} 
          style={{width: '100%',
            height: 210, 
            marginTop: 10}} 
          controls={true} 
          resizeMode="cover" 
          muted={true}
          repeat={false}
          paused={paused}
          onEnd={handleVideoEnd}
        />
      </View>
        <UserActions/>
    </View>

    <View style={{
          height: 310,
          width: '100%',
          borderColor: '#808080',
          borderBottomWidth: 3,
          overflow: 'hidden',
          marginTop:10
                  }}>
      <View style={{marginLeft:10,marginRight:10,display:'flex',flexDirection:'row'}}>
      <Image source={require('../assets/images/Ellyse-Perry.png')} style={{ width: 50,
        height: 50,
        borderRadius: 75 / 2,  
        borderWidth: 0.5,        
        borderColor: '#000'}}    />
        <View>
        <Text  style={{ fontWeight: 'bold', color: '#000000',fontSize:12,paddingLeft:10,paddingTop:10}}>Harleen</Text>
        <View style={{display:'flex',flexDirection:'row'}}>
        <Text style={{fontSize:10,paddingLeft:10,color: '#000000'}}>4d .</Text>
        <View style={{paddingLeft:5,paddingTop:1}}>
        <Fontisto name="world" size={13} color="#000000" />  
        </View> 
        </View>
        </View>
      </View>
      <View>
      <Video
          source={require('../assets/videos/t-1.mp4')} 
          style={{width: '100%',
            height: 210, 
            marginTop: 10}} 
          controls={true} 
          resizeMode="cover" 
          muted={true}
          repeat={false}
          paused={paused}
          onEnd={handleVideoEnd}
        />
      </View>
        <UserActions/>
    </View>
    
    </View>
    ):(<YeetCompo/>)
  );
}

export default Body;
