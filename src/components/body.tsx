import  { useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, Alert, FlatList, StyleSheet } from 'react-native';
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
  const [likeCount, setLikeCount] = useState(2);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [currentComment, setCurrentComment] = useState<string>('');

  const handleReplaceComponent = () => {
    setIsComponent(false); 
  };

  const handleLikePress = () => {
    setLikeCount(prevCount => prevCount + 1);
    console.log(likeCount)
  };

  const handleCommentToggle = () => {
    setShowCommentSection(!showCommentSection);
  };

  const handleVideoEnd = () => {
    console.log('Video has finished playing');
    setPaused(true);
  };

  const handlePostComment = () => {
    if (currentComment.trim()) {
      setComments([...comments, currentComment]); // Add new comment to the comments array
      setCurrentComment(''); // Clear the input field
    }
  };

  return (
    isComponent?(
    <View>

        <View className="w-full border-b-2 border-gray-400 pt-1.5"  style={{ height: showCommentSection ? 400 : 335 }}>
        <View className="w-full pl-2.5">
        <View className="flex flex-row">
        <Image source={require('../assets/images/Ellyse-Perry.png')} className="w-12 h-12 rounded-full border border-black" />
        <View>
        <Text className="font-bold text-black text-xs pl-2.5 pt-1">Ellyse-Perry</Text>
        <View className="flex flex-row">
        <Text className="text-[10px] text-white bg-pink-600 pt-0.5 pb-0.5 pr-1.5 pl-1.5 rounded ml-2">Live</Text>
        <View className="pl-1.5 pt-0.5">
        <Fontisto name="world" size={13} color="#000000" />  
        </View> 
        </View>
        </View>
        </View>

        {/* posted Video */}
        <View className="pt-16 h-24 w-[600px] relative justify-center items-center">
        <Video 
            source={require('../assets/videos/t-1.mp4')} 
            className="w-[640px] h-[150px]" 
            resizeMode="cover" 
            paused={false}
            repeat
        />
        <View className="absolute inset-0 justify-center items-start">
            <Text className="text-white text-base w-50 text-left">2024 Budget Discussions in Loksabha</Text>
        </View>
        </View>

        {/* Video carousal */}
        <View>
            <ParallaxVideoCarousel />
        </View>

        {/* Actions */}
        <View className="flex flex-row justify-evenly items-center">
        <View >
            <TouchableOpacity onPress={handleLikePress} className="flex-row items-center">
              <EvilIcons name="like" size={25} color="#000000" />     
              <Text className="text-black mr-1">Like</Text>
              <Text className="text-black">{likeCount}</Text> 
            </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity onPress={handleCommentToggle}  className="flex-row items-center">
              <EvilIcons name="comment" size={25} color="#000000" /> 
              <Text className="text-black">Comment</Text>
        </TouchableOpacity >
            </View>
            <View>
              <TouchableOpacity onPress={handleReplaceComponent}  className="flex-row items-center">
                <Text className="text-black pr-1 text-[17px]">Y</Text>
                <Text className="text-black">Yeet</Text>
              </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity className="flex-row items-center">
              <Entypo name="share" size={15} color="#000000" />
              <Text  className="text-black pl-1">Share</Text>
            </TouchableOpacity>
            </View> 
        </View>

        {showCommentSection && (
        <View className="p-2.5 m-2.5 bg-gray-200 flex flex-row justify-between">
            <View>
            <TextInput
              placeholder="Add a comment..."
              value={currentComment}
              onChangeText={setCurrentComment}
              className="h-10 border border-gray-400 pl-2 w-50"
            />
            </View>
            <View>
            <TouchableOpacity onPress={handlePostComment} className="self-end p-2.5 bg-pink-600 rounded">
              <Text className="text-white">Post Comment</Text>
            </TouchableOpacity>
              <View>
              {/* <FlatList
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={{ paddingTop: 5 }}>
                    <Text style={{ color: '#000000' }}>{item}</Text>
                  </View>
              )}
              /> */}
              </View>
            </View>   
        </View>
        )}
        </View>
    </View>

    {/* 2nd Post */}
            
        {/* <View style={{
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
          <View >
            <UserActions/>
            </View>
        </View> */}

    {/* 3nd Post */}

        {/* <View style={{
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
        </View> */}
    
    </View>
    ):(<YeetCompo/>)
  );
}

export default Body;


const styles = StyleSheet.create({
  video: {
    width: 640,
    height: 150,
  },
});
