import React, { useState, useEffect, useRef } from 'react';


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
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
import firestore from '@react-native-firebase/firestore';



function VideoCard(props) {
    return (

        <View style={{ borderColor: "black", borderWidth: 5}}>
            <Image source={{ uri: props.thumbnail }} style={{ height: '60%', width: '100%', }} />

            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                <View style={{ marginTop:'3%'}}>
                    <Avatar.Image
                        source={{
                            uri: props.uri
                        }}
                        size={60}
                    />
                </View>
                <View style={{ marginLeft: '3%', marginTop:'3%' }}>
                    <Text style={All_Videos_Style.TextStyle}>{props.title}</Text>
                    <Text style={All_Videos_Style.TextStyle2}>{props.views} Views</Text>
                </View>
                <View style={{ marginLeft: '5%', marginTop:'3%' }}>
                    <Icon name='ellipsis-vertical'
                        size={22}
                        color='white'
                        onPress={() => props.navigation.openDrawer()}
                    />
                </View>
            </View>
        </View>

    );
}


export default VideoCard;