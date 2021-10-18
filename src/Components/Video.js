import React from 'react';
import { Video_Style } from "../../style";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Appbar,
  DarkTheme,
} from 'react-native-paper';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import VideoPlayer from "react-native-video-player"
import { amberA100 } from 'react-native-paper/lib/typescript/styles/colors';
//  import Icon from 'react-native-vector-icons/dist/FontAwesome'


const Video = () => {
  return (
    <LinearGradient colors={["#0cbaba", "#380036"]} style={{ alignSelf: "center", height: '100%', width: '100%' }}>

      <View>
        <VideoPlayer video={{ uri: "https://player.vimeo.com/external/517619980.sd.mp4?s=61be3cadb6566d23fb20ad2cf54876e2a85a78c5&profile_id=139&oauth2_token_id=57447761" }}
          videoHeight={250}
          videoWidth={450}
          thumbnail={{ uri: "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-1024x683.jpg" }}
          autoplay={false}
          resizeMode={"cover"}
        />

        <View style={{ marginLeft: '5%', marginTop: '2%' }}>
          <Text style={Video_Style.TextStyle}>Building Website (React JS)</Text>
          <Text style={Video_Style.TextStyle2}>React JS  .1.1k Views  .1 week ago</Text>
        </View>

        <View style={{ flexDirection: 'row', }}>
          <View style={{ marginLeft: '13%', marginTop: '4%' }}>
            <Icon name="thumbs-up"
              size={30}
              color='white'
              onPress={() => props.navigation.openDrawer()}
            />
            <Text style={{color:'white',marginTop:5}}>150</Text>
          </View>
          <View style={{ marginLeft: '25%', marginTop: '4%' }}>
            <Icon name="thumbs-down"
              size={30}
              color='white'
              onPress={() => props.navigation.openDrawer()}
            />
            <Text style={{color:'white',marginTop:5}}>10</Text>
          </View>
          <View style={{ marginLeft: '25%', marginTop: '4%' }}>
            <Icon name="arrow-redo"
              size={30}
              color='white'
              onPress={() => props.navigation.openDrawer()}
            />
            <Text style={{color:'white',marginTop:5}}>Share</Text>
          </View>
        </View>
        <Text style={{color:'gray'}}>----------------------------------------------------------------------------------------------</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
          <View>
            <Avatar.Image
              source={{
                uri: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
              }}
              size={60}
            />
          </View>
          <View style={{ marginLeft: '3%' }}>
            <Text style={Video_Style.TextStyle}>Building Website (React JS)</Text>
            <Text style={Video_Style.TextStyle2}>React JS  .1.1k Views  .1 week ago</Text>
          </View>
          <View style={{ marginLeft: '5%' }}>
            <Icon name='ellipsis-vertical'
              size={22}
              color='white'
              onPress={() => props.navigation.openDrawer()}
            />
          </View>
        </View>
        <Text style={{color:'gray'}}>----------------------------------------------------------------------------------------------</Text>
      </View>

    </LinearGradient>

  )
}


export default Video;