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
        <View style={tw`border-b-3 border-gray-400 ${showCommentSection ? 'h-100' : 'h-84'} pt-1`}>
          <View style={tw`pl-2.5`}>
            <View style={tw`flex flex-row`}>
              <Image source={require('../assets/images/Ellyse-Perry.png')} style={tw`w-12 h-12 rounded-full border border-gray-800`} />
              <View>
                <Text style={tw`font-bold text-black text-sm pt-2 pl-2`}>Ellyse-Perry</Text>
                <View style={tw`flex flex-row`}>
                  <Text style={tw`text-xs bg-red-600 text-white rounded-md px-1 py-0.5 ml-2`}>Live</Text>
                  <Fontisto name="world" size={13} color="#000000" style={tw`pl-1 pt-0.5`} />
                </View>
              </View>
            </View>
            <View style={tw`relative mt-1.5`}>
              <Video
                source={require('../assets/videos/t-1.mp4')}
                style={tw`w-full h-40`}
                resizeMode="cover"
                paused={false}
                repeat
              />
              <View style={tw`absolute top-0 left-0 right-0 bottom-0 flex justify-center items-start`}>
                <Text style={tw`text-white text-sm w-50 text-left`}>2024 Budget Discussions in Loksabha</Text>
              </View>
            </View>
            <ParallaxVideoCarousel />
            <View style={tw`flex flex-row justify-evenly items-center mt-2`}>
              <View>
                <TouchableOpacity onPress={handleLikePress} style={tw`flex flex-row items-center`}>
                  <EvilIcons name="like" size={25} color="#000000" />
                  <Text style={tw`text-black mr-2`}>Like</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handleCommentToggle} style={tw`flex flex-row items-center`}>
                  <EvilIcons name="comment" size={25} color="#000000" />
                  <Text style={tw`text-black`}>Comment</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={handleReplaceComponent} style={tw`flex flex-row items-center`}>
                  <Text style={tw`text-black pr-1 text-lg`}>Y</Text>
                  <Text style={tw`text-black`}>Yeet</Text>
                </TouchableOpacity>
              </View>
              <View style={tw`flex flex-row items-center`}>
                <TouchableOpacity style={tw`flex flex-row items-center`}>
                  <Entypo name="share" size={15} color="#000000" />
                  <Text style={tw`text-black pl-1`}>Share</Text>
                </TouchableOpacity>
              </View>
            </View>

            {showCommentSection && (
              <View style={tw`p-2 mt-2 bg-gray-100 flex flex-row justify-between`}>
                <View>
                  <TextInput
                    placeholder="Add a comment..."
                    value={currentComment}
                    onChangeText={setCurrentComment}
                    style={tw`h-10 border border-gray-400 pl-2 w-50`}
                  />
                </View>
                <View>
                  <TouchableOpacity onPress={handlePostComment} style={tw`bg-red-600 p-2 rounded-md`}>
                    <Text style={tw`text-white`}>Post Comment</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        </View>

        <View style={tw`h-80 w-full border-b-3 border-gray-400 overflow-hidden mt-2 pt-2`}>
          <View style={tw`flex flex-row mx-2`}>
            <Image source={require('../assets/images/harleen.jpg')} style={tw`w-12 h-12 rounded-full border border-gray-800`} />
            <View>
              <Text style={tw`font-bold text-black text-sm pt-2 pl-2`}>Harleen</Text>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-xs text-black pl-2`}>4d .</Text>
                <Fontisto name="world" size={13} color="#000000" style={tw`pl-1 pt-0.5`} />
              </View>
            </View>
          </View>
          <Video
            source={require('../assets/videos/t-3.mp4')}
            style={tw`w-full h-52 mt-2`}
            controls={true}
            resizeMode="cover"
            muted={true}
            repeat={false}
            paused={paused}
            onEnd={handleVideoEnd}
          />
          <UserActions />
        </View>

        <View style={tw`h-78 w-full border-b-3 border-gray-400 overflow-hidden mt-2`}>
          <View style={tw`flex flex-row mx-2`}>
            <Image source={require('../assets/images/Ellyse-Perry.png')} style={tw`w-12 h-12 rounded-full border border-gray-800`} />
            <View>
              <Text style={tw`font-bold text-black text-sm pt-2 pl-2`}>Harleen</Text>
              <View style={tw`flex flex-row`}>
                <Text style={tw`text-xs text-black pl-2`}>4d .</Text>
                <Fontisto name="world" size={13} color="#000000" style={tw`pl-1 pt-0.5`} />
              </View>
            </View>
          </View>
          <Video
            source={require('../assets/videos/t-1.mp4')}
            style={tw`w-full h-52 mt-2`}
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
  container: tw`ml-2.5 pt-16 h-24 w-[600px] relative justify-center items-center`,
  video: tw`w-[640px] h-[150px]`,
  overlay: tw`absolute top-0 left-0 right-0 bottom-0 justify-center items-start`,
  overlayText: tw`text-white text-sm w-52 text-left`,
};
