import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid, Alert } from 'react-native';
// import database from "@react-native-firebase/database";
import {changeisstudent} from "../../Store/action/index"
import {connect } from "react-redux"
import LinearGradient from 'react-native-linear-gradient';
import {Signup,Home_Style} from "../../style.js"
import firestore from '@react-native-firebase/firestore';




function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [enterPass, setenterPass] = useState("");

  

  const verify=()=>{
    var emailSplit=email.split("@")
    const alreadyExist= firestore().collection("Users").doc(emailSplit[0]).get().then(Snapshot=>{Snapshot.exists})
    if(alreadyExist){
    firestore().collection("Users").doc(emailSplit[0]).get().then(
        data=>{
          setenterPass(data.data()) 
        }
      
      )
    // console.log(enterPass)
      if (pass==enterPass.pass){
          Alert.alert("Successfully login")
      }

    }
  

}

    return(
     
      <LinearGradient colors={["#0cbaba","#380036"]} style={Signup.mainView}>
      <View>
        <Text style={{ fontSize: 50, color: "white", fontWeight: 'bold',marginBottom:10 }}>Login</Text>
      </View>
      <View style={Signup.field}>
        <TextInput value={email} keyboardType={"email-address"} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={Signup.field}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>

    <View style={{margin:"10%",paddingLeft:"3%",paddingRight:"3%",backgroundColor:"#380036"}}>
    <Text onPress={()=>verify()} style={Home_Style.ButtonStyle}>Login</Text>
    </View>
    </LinearGradient>
    )

}

function mapStateToProps(state) {
    return {
      userInfo: state.userInfo
    }
  }
  
  
  function mapDispatchToProps(dispatch) {
    return {
      changeisuser: (userInfo) => dispatch(changeisuser(userInfo))
    }
  }

 
export default connect(mapStateToProps, mapDispatchToProps)(Login)