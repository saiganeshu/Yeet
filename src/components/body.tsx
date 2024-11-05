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
  const [likeCount, setLikeCount] = useState(0);
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

    <View style={{
      height: showCommentSection ? 400 : 335,
      width: '100%',
      borderColor: '#808080',
      borderBottomWidth: 3,
      paddingTop:5
    }}>
        <View style={{
          width: '100%',
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
          <View style={styles.container}>
          <Video 
            source={require('../assets/videos/t-1.mp4')} 
            style={styles.video} 
            resizeMode="cover" 
            paused={false}
            repeat
          />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>2024 Budget Discussions in Loksabha</Text>
          </View>
        </View>
          <View>
            <ParallaxVideoCarousel />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
            <View >
            <TouchableOpacity onPress={handleLikePress} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <EvilIcons name="like" size={25} color="#000000" />     
              <Text style={{ color: '#000000', marginRight: 5 }}>Like</Text>
              {/* <Text style={{ color: '#000000' }}>{likeCount.toString()}</Text> Display the like count */}
            </TouchableOpacity>
              </View>
            <View >
            <TouchableOpacity onPress={handleCommentToggle}  style={{ flexDirection: 'row', alignItems: 'center'}}>
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

          {showCommentSection && (
          <View style={{ padding: 10, margin: 10, backgroundColor: '#f0f0f0', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <View>
            <TextInput
              placeholder="Add a comment..."
              value={currentComment}
              onChangeText={setCurrentComment}
              style={{ height: 40, borderColor: '#808080', borderWidth: 1, paddingLeft: 8,width:200 }}
            />
            </View>
            <View>
            <TouchableOpacity onPress={handlePostComment} style={{ alignSelf: 'flex-end', padding: 10, backgroundColor: '#ce375a', borderRadius: 5 }}>
              <Text style={{ color: '#fff' }}>Post Comment</Text>
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
      <View >
        <UserActions/>
        </View>
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


const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    paddingTop:70,
    height: 100,
    width: 600,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 640,
    height: 150,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  overlayText: {
    color: '#FFFFFF',
    fontSize: 15,
    width: 200,
    textAlign:'left',
  },
});
