import { useState } from 'react';
import tw from 'tailwind-rn';
import { Text, View, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import ParallaxVideoCarousel from './parallax-video';
import Video from 'react-native-video';
import UserActions from './userActions';
import Fontisto from "react-native-vector-icons/Fontisto";
import YeetCompo from './yeetComponent';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

function Body() {
  const [paused, setPaused] = useState(false);
  const [isComponent, setIsComponent] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [showCommentSection, setShowCommentSection] = useState(false);
  const [comments, setComments] = useState<string[]>([]);
  const [currentComment, setCurrentComment] = useState<string>('');

  const handleReplaceComponent = () => {
    setIsComponent(false);
  };

  const handleLikePress = () => {
    setLikeCount(prevCount => prevCount + 1);
  };

  const handleCommentToggle = () => {
    setShowCommentSection(!showCommentSection);
  };

  const handleVideoEnd = () => {
    setPaused(true);
  };

  const handlePostComment = () => {
    if (currentComment.trim()) {
      setComments([...comments, currentComment]);
      setCurrentComment('');
    }
  };

  return (
    isComponent ? (
      <View>
        <View className={`border-b-3 border-gray-400 ${showCommentSection ? 'h-100' : 'h-84'} pt-1`}>
          <View className="pl-2.5">
            <View className="flex flex-row">
              <Image source={require('../assets/images/Ellyse-Perry.png')} className="w-12.5 h-12.5 rounded-full border border-gray-800" />
              <View>
                <Text className="font-bold text-black text-sm pt-2 pl-2">Ellyse-Perry</Text>
                <View className="flex flex-row">
                  <Text className="text-xs bg-red-600 text-white rounded-md px-1 py-0.5 ml-2">Live</Text>
                  <Fontisto name="world" size={13} color="#000000" className="pl-1 pt-0.5" />
                </View>
              </View>
            </View>
            <View className="relative mt-1.5">
              <Video
                source={require('../assets/videos/t-1.mp4')}
                className="w-full h-40"
                resizeMode="cover"
                paused={false}
                repeat
              />
              <View className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start">
                <Text className="text-white text-sm w-50 text-left">2024 Budget Discussions in Loksabha</Text>
              </View>
            </View>
            <ParallaxVideoCarousel />
            <View className="flex flex-row justify-evenly items-center mt-2">
              <View>
                <TouchableOpacity onPress={handleLikePress} className="flex flex-row items-center">
                  <EvilIcons name="like" size={25} color="#000000" />
                  <Text className="text-black mr-2">Like</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handleCommentToggle} className="flex flex-row items-center">
                  <EvilIcons name="comment" size={25} color="#000000" />
                  <Text className="text-black">Comment</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handleReplaceComponent} className="flex flex-row items-center">
                  <Text className="text-black pr-1 text-lg">Y</Text>
                  <Text className="text-black">Yeet</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row items-center">
                <TouchableOpacity className="flex flex-row items-center">
                  <Entypo name="share" size={15} color="#000000" />
                  <Text className="text-black pl-1">Share</Text>
                </TouchableOpacity>
              </View>
            </View>

            {showCommentSection && (
              <View className="p-2 mt-2 bg-gray-100 flex flex-row justify-between">
                <View>
                  <TextInput
                    placeholder="Add a comment..."
                    value={currentComment}
                    onChangeText={setCurrentComment}
                    className="h-10 border border-gray-400 pl-2 w-50"
                  />
                </View>
                <View>
                  <TouchableOpacity onPress={handlePostComment} className="bg-red-600 p-2 rounded-md">
                    <Text className="text-white">Post Comment</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>

        <View className="h-80 w-full border-b-3 border-gray-400 overflow-hidden mt-2 pt-2">
          <View className="flex flex-row mx-2">
            <Image source={require('../assets/images/harleen.jpg')} className="w-12.5 h-12.5 rounded-full border border-gray-800" />
            <View>
              <Text className="font-bold text-black text-sm pt-2 pl-2">Harleen</Text>
              <View className="flex flex-row">
                <Text className="text-xs text-black pl-2">4d .</Text>
                <Fontisto name="world" size={13} color="#000000" className="pl-1 pt-0.5" />
              </View>
            </View>
          </View>
          <Video
            source={require('../assets/videos/t-3.mp4')}
            className="w-full h-52 mt-2"
            controls={true}
            resizeMode="cover"
            muted={true}
            repeat={false}
            paused={paused}
            onEnd={handleVideoEnd}
          />
          <UserActions />
        </View>

        <View className="h-78 w-full border-b-3 border-gray-400 overflow-hidden mt-2">
          <View className="flex flex-row mx-2">
            <Image source={require('../assets/images/Ellyse-Perry.png')} className="w-12.5 h-12.5 rounded-full border border-gray-800" />
            <View>
              <Text className="font-bold text-black text-sm pt-2 pl-2">Harleen</Text>
              <View className="flex flex-row">
                <Text className="text-xs text-black pl-2">4d .</Text>
                <Fontisto name="world" size={13} color="#000000" className="pl-1 pt-0.5" />
              </View>
            </View>
          </View>
          <Video
            source={require('../assets/videos/t-1.mp4')}
            className="w-full h-52 mt-2"
            controls={true}
            resizeMode="cover"
            muted={true}
            repeat={false}
            paused={paused}
            onEnd={handleVideoEnd}
          />
          <UserActions />
        </View>
      </View>
    ) : (
      <YeetCompo />
    )
  );
}

export default Body;


const styles = {
  container: "ml-2.5 pt-16 h-24 w-[600px] relative justify-center items-center",
  video: "w-[640px] h-[150px]",
  overlay: "absolute top-0 left-0 right-0 bottom-0 justify-center items-start",
  overlayText: "text-white text-sm w-52 text-left",
};
