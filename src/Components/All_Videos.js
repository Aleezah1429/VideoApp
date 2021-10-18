import React, { useState, useEffect, useRef } from 'react';
import firestore from '@react-native-firebase/firestore';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { All_Videos_Style } from "../../style";
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import VideoCard from './VideoCard';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Appbar,
    DarkTheme,
} from 'react-native-paper';


function All_Videos(props) {
    const [videoslist, setvideoslist] = useState([])
    useEffect(() => {

        firestore().collection("Videos").onSnapshot(snapshot => {

            snapshot.forEach(data => {
                setvideoslist(list => [...list, data.data()])
            })

        })
    }, [])
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
            <ScrollView>
                <LinearGradient colors={["#0cbaba", "#380036"]} style={{ height: '100%', width: '100%' }}>

                    <FlatList data={videoslist}
                        renderItem={(element) => {
                            return (

                                <VideoCard uri={element.item.uri} thumbnail={element.item.thumbnail} title={element.item.title} views={element.item.title} />
                            )
                        }

                        }
                        keyExtractor={(element) => element.index}

                    ></FlatList>



                </LinearGradient>
            </ScrollView>


        </>
    );
}

export default All_Videos;