import * as React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { Signup, Home_Style } from "../../style.js"

import firestore from '@react-native-firebase/firestore';
import LinearGradient from 'react-native-linear-gradient';


function UserSignUp(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [alreadyExist,setAlreadyexist] = useState("")

  const save_data = () => {
    var emailSplit = email.split("@")
    firestore().collection("Users").doc(emailSplit[0]).get().then(snapshot => { setAlreadyexist(snapshot.exists()) })
    console.log(alreadyExist)
    if (alreadyExist) {
      Alert.alert("User already exist")
    }
    else {
      firestore().collection('Users').doc(emailSplit[0]).set({ Name, email, pass })
    }
  }

  return (

    <LinearGradient colors={["#0cbaba", "#380036"]} style={Signup.mainView}>
      <View>
        <Text style={{ fontSize: 50, color: "white", fontWeight: 'bold', marginBottom: 10 }}>SignUp</Text>
      </View>
      <View style={Signup.field}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={Signup.field}>
        <TextInput value={email} keyboardType={"email-address"} onChangeText={(e) => setEmail(e)} placeholder="Email" />
      </View>
      <View style={Signup.field}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>

      <View style={{
        margin: '8%', backgroundColor: "#380036", width: '40%', alignSelf: "center",
      }}>
        <Text onPress={() => save_data()} style={Home_Style.ButtonStyle}>Signup</Text>
      </View>
    </LinearGradient>
  );
}

export default UserSignUp;