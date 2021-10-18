import React, { useState, useEffect, useRef } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { All_Videos_Style, Categories_Style } from "../../style";
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


function Categories(props) {
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

            {/* <SafeAreaView> */}
                <ScrollView  contentContainerStyle={{ paddingBottom: 700, backgroundColor:'#380036'}}>
                    <LinearGradient colors={["#0cbaba", "#380036"]} style={{ height: '100%', width: '100%', }}>

                    <View style={{margin:15}}>
                        <ImageBackground source={require('../Images/nature_bg.jpg')} style={{ height: '65%', width: '100%', }} >
                            <Text style={Categories_Style.Category_text}>NATURE</Text>
                        </ImageBackground>
                    </View>

                    <View style={{bottom: '38%', margin: 15 }}>
                        <ImageBackground source={require('../Images/music_bg.jpg')} style={{ height: '67%', width: '100%', }} >
                            <Text style={Categories_Style.Category_text}>MUSIC</Text>
                        </ImageBackground>
                    </View>

                    <View style={{bottom: '75%', margin: 15 }}>
                        <ImageBackground source={require('../Images/animals_bg.jpg')} style={{ height: '67%', width: '100%', }} >
                            <Text style={Categories_Style.Category_text}>ANIMALS</Text>
                        </ImageBackground>
                    </View>

                    <View style={{bottom: '112%', margin: 15 }}>
                        <ImageBackground source={require('../Images/funny_bg.jpg')} style={{ height: '67%', width: '100%', }} >
                            <Text style={Categories_Style.Category_text}>FUNNY</Text>
                        </ImageBackground>
                    </View>

                    <View style={{bottom: '162%', margin:15, marginTop:'38%' }}>
                        <ImageBackground source={require('../Images/sports_bg.jpg')} style={{ height: '67%', width: '100%', }} >
                            <Text style={Categories_Style.Category_text}>SPORTS</Text>
                        </ImageBackground>
                    </View>

                    <View style={{bottom: '195%', margin:15, marginTop:'5%' }}>
                        <ImageBackground source={require('../Images/action_bg.jpg')} style={{ height: '67%', width: '100%', }} >
                            <Text style={Categories_Style.Category_text}>ACTION</Text>
                        </ImageBackground>
                    </View>


                    </LinearGradient>

                </ScrollView>
            {/* </SafeAreaView> */}
        </>
    );
}

export default Categories;