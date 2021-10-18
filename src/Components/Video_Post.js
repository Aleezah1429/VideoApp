import React, { useState, useEffect, useRef } from 'react';
import firestore from '@react-native-firebase/firestore';
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
import ImagePicker from "react-native-image-picker"


import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Button,
    TextInput,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { All_Videos_Style, Model, Home_Style } from "../../style";
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
import { color } from 'react-native-reanimated';


function Video_Post(props) {
    // ____DROPDOWN_____
    const [selectedLanguage, setSelectedLanguage] = useState();

    // ____Select the image___
    const options = {
        title: 'Select Avatar',
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else {
            const uri = response.uri;
            this.setState({
                selectedPictureUri: uri,
            });
        }
    });

    // _____Upload Image To Firebase Cloud Storage____
    const { imageName, uploadUri } = this.state;
    firebase
        .storage()
        .ref(imageName)
        .putFile(uploadUri)
        .then((snapshot) => {
            //You can check the image is now uploaded in the storage bucket
            console.log(`${imageName} has been successfully uploaded.`);
        })
        .catch((e) => console.log('uploading image error => ', e));

    // ____Retrieve Image From Firebase Cloud Storage____
    let imageRef = firebase.storage().ref('/' + imageName);
    imageRef
        .getDownloadURL()
        .then((url) => {
            //from url you can fetched the uploaded image easily
            this.setState({ profileImageUrl: url });
        })
        .catch((e) => console.log('getting downloadURL of image error => ', e));





    return (
        <>
            <Modal isVisible={props.isModalVisible}>
                <LinearGradient colors={["#0cbaba", "#380036"]}>
                    <View style={{ color: "white", textAlign: 'center', alignItems: "center", padding: '10%' }}>
                        <View>
                            <Text style={{ fontSize: 35, color: "white", fontWeight: 'bold', }}>Add Video</Text>
                        </View>

                        <View style={Model.field}>
                            <TextInput placeholder="Title" />
                        </View>

                        <View style={Model.field}>
                            <TextInput placeholder="Description" />
                        </View>

                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker>

                        <View style={Model.field}>
                            <TextInput placeholder="Thumbnail" />
                        </View>

                        <Image source={this.state.profileImageUrl} />

                        <View style={{ margin: "10%", paddingLeft: "10%", paddingRight: "10%", backgroundColor: "#380036" }}>
                            <Text onPress={() => verify()} style={Home_Style.ButtonStyle}>POST</Text>
                        </View>
                    </View>
                </LinearGradient>
            </Modal>


        </>
    );
}

export default Video_Post;