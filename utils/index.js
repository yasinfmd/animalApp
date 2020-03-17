import React from "react";
import {Alert} from "react-native"

export const showMsg = (title, msg, cancelVisible) => {
    let alertContent;
    if (cancelVisible) {
        alertContent = [
            {
                text: 'Vazgeç',
                style: 'cancel',
            },
            {text: 'Tamam'},
        ]
    } else {
        alertContent = [
            {text: 'Tamam'},
        ]
    }
    Alert.alert(
        title,
        msg,
        cancelVisible
        ,
        {cancelable: false}
    );
}

export const phoneNumValidator = (phone) => {
    let isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone);
    return isphone;
}
export const passwordValidator = (password) => {
   if(password.length<8){
       return false
   }
   return  true
}

export const emailValidator = (email) => {
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}