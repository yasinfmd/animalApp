import React,{ useEffect } from "react";
import {View, AsyncStorage, StyleSheet} from "react-native"
import Loading from "../components/loading";
import {useDispatch} from "react-redux"
import {authuser} from "../actions"
const StartupScreen = (props) => {
    const dispatch=useDispatch();
    useEffect(() => {
        debugger
       const tryLogin=async ()=>{
           debugger
           const user=await AsyncStorage.getItem("user")
           if(!user){
               props.navigation.navigate("Login")
               return ;
           }
           const transformuser=JSON.parse(user);
           console.log(transformuser)
           dispatch(authuser(transformuser))
           props.navigation.navigate("AnaSayfa")
       }
       tryLogin()
    },[dispatch]);
    return (
        <View style={style.content}>
            <Loading/>
        </View>
    )
}
const style=StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default StartupScreen;