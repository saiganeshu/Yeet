import  { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from 'react-native';
import ParallaxVideoCarousel from './parallax-video';
import Video from 'react-native-video';
import Fontisto from "react-native-vector-icons/Fontisto"
import YeetCompo from './yeetComponent';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import axios from 'axios';
import { MainVideo } from '../utils/types';

function Body() {
  const screenWidth = Dimensions.get('window').width;
  const [isComponent, setIsComponent] = useState(true);
  // const [likeCount, setLikeCount] = useState(2);
  const [liked, setLiked] = useState(false);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [currentComment, setCurrentComment] = useState<string>('');
  const [mainVideoObject, setMainVideoObject] = useState<MainVideo>({})
  const [videoPath,setVideoPath] = useState<string>('')
  const likeColor = liked ? '#077be0' : '#000000';

  useEffect(()=>{
    axios.get('http://10.0.2.2:3000/api/allVideos/1').then((res)=>{
      setMainVideoObject(res.data)
    })
    setVideoPath('http://10.0.2.2:3000/api/allVideos/stream/1')
  },[videoPath])
  const handleReplaceComponent = () => {
    setIsComponent(false); 
  };

  const handleLikePress = () => {
    // setLikeCount(prevCount => prevCount + 1);
    setLiked(prevLiked => !prevLiked);
  };

  const handleCommentToggle = () => {
    setShowCommentSection(!showCommentSection);
  };

  const handlePostComment = () => {
    if (currentComment.trim()) {
      setComments([...comments, currentComment]); // Add new comment to the comments array
      setCurrentComment(''); // Clear the input field
    }
  };


  return (
    isComponent?(
      <View className="w-full bg-white mb-3 rounded-lg shadow-md border border-gray-300">
      {/* Header */}
      <View className="flex-row items-center mb-2">
        <Image source={require('../assets/images/Ellyse-Perry.png')} className="w-10 h-10 rounded-full mr-3 border border-gray-300" />
        <View>
          <Text className="font-semibold text-black text-sm">Ellyse Perry</Text>
          <View className="flex-row items-center">
            <Text className="text-xs text-white bg-pink-600 px-2 py-0.5 rounded mr-1">Live</Text>
            <Fontisto name="world" size={12} color="#000" />
          </View>
        </View>
      </View>

      {/* Video Title */}

      {/* Video Player */}
      <View className='h-40 rounded-lg overflow-hidden self-center' style={{ width: screenWidth}}>
        <Video 
            source={{uri:videoPath}} 
            className="w-[640px] h-[150px]"
            resizeMode="cover" 
            paused={false}
            repeat
        />
        <View className="absolute inset-0 justify-center items-start">
            {/* <Text className="text-white text-base w-50 text-left bg-black-transparent-60">{mainVideoObject.title?? ''}</Text> */}
        </View>
        </View>

        <View>
          <ParallaxVideoCarousel />
        </View>

        <View className='pl-2'>
          {/* <Text className='font-semibold text-black text-sm'>{mainVideoObject.description ?? ''}</Text> */}
        </View>

      {/* Action Buttons */}
      <View className="flex-row justify-between items-center mb-2 pl-5 pr-5 pt-2">
        <TouchableOpacity onPress={handleLikePress} className="flex-row items-center">
          <EvilIcons name="like" size={24} color={likeColor} />
          <Text className=" text-black" style={{color:likeColor}}>Like</Text>
          {/* <Text className="ml-1 text-black">{likeCount}</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowCommentSection(!showCommentSection)} className="flex-row items-center">
          <EvilIcons name="comment" size={24} color="#000" />
          <Text className="text-black">Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center" onPress={handleReplaceComponent}>
          <Text className="text-lg font-semibold text-black">Y</Text>
          <Text className="ml-1 text-black">Yeet</Text>
        </TouchableOpacity>
        <TouchableOpacity  className="flex-row items-center">
          <Entypo name="share" size={16} color="#000" />
          <Text className="ml-1 text-black">Share</Text>
        </TouchableOpacity>
      </View>

      {/* Comment Section */}
      {showCommentSection && (
        <View className="bg-gray-100 p-2 rounded-lg">
          <View className="flex-row items-center mb-2">
            <TextInput
              placeholder="Add a comment..."
              value={currentComment}
              onChangeText={setCurrentComment}
              className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 text-black"
            />
            <TouchableOpacity onPress={handlePostComment} className="ml-2 px-3 py-1 bg-pink-600 rounded">
              <Text className="text-white">Post</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View className="py-1">
                <Text className="text-black">{item}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
    ):(<YeetCompo/>)
  );
}

export default Body;
