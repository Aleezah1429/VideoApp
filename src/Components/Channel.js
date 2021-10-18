import React, { useState, useEffect, useRef } from 'react';
import Video_Post from './Video_Post';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    ImageBackground,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { All_Videos_Style } from "../../style";
import Svg, { Path } from 'react-native-svg';
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


function Channel(props) {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    return (
        <>
            <Appbar theme={DarkTheme} style={All_Videos_Style.AppBarStyle}>
                <Image source={require('../Images/Logo.png')} style={{ height: '70%', margin: 5, width: '10%', }} />
                <Text style={All_Videos_Style.HeadingStyle}>VIDEOEX</Text>
                <Appbar.Action
                    icon="account-circle"
                    onPress={() => console.log('Pressed archive')}
                    style={{ marginLeft: '19%' }}
                />
                <Appbar.Action icon="video" onPress={() => console.log('Pressed mail')} />
                <Appbar.Action icon="magnify" onPress={() => console.log('Pressed label')} />

            </Appbar>

            <LinearGradient colors={["#0cbaba", "#380036"]} style={{ alignSelf: "center", height: '100%', width: '100%' }}>

                <View style={{ flexDirection: 'row', margin: '7%' }}>
                    <View>
                        <Avatar.Image
                            source={{
                                uri: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'
                            }}
                            size={70}
                        />
                    </View>
                    <View style={{ marginLeft: '3%' }}>
                        <Text style={All_Videos_Style.TextStyle}>Wajahat Ahmed</Text>
                        <Text style={All_Videos_Style.TextStyle2}>No Subscriber</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '7%' }}>
                    <Image source={require('../Images/video.png')} style={{ height: '60%', width: '60%', marginTop:'-15%'}} />

                    <View style={{marginTop:'5%',width:'50%'}}>
                        <Button
                            title="Add Video"
                            color="#0cbaba"
                            onPress={toggleModal}
                        >
                        </Button>
                        <Video_Post isModalVisible={isModalVisible}/>
                    </View>
                </View>




            </LinearGradient>



        </>
    );
}

export default Channel;