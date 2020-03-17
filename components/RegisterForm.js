import React, {Component} from 'react';
import {
    Dimensions,
    StyleSheet,
    KeyboardAvoidingView, TouchableOpacity, Image
} from 'react-native';

import UserInput from './UserInput';
import usernameImg from '../images/username.png';
import phoneImg from "../images/phone.png"
import passwordImg from "../images/password.png";
import eyeImg from "../images/eye_black.png";

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false
            ? this.setState({showPass: false, press: true})
            : this.setState({showPass: true, press: false});
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <UserInput
                    onChange={this.props.nameChange}
                    value={this.props.nameVal}
                    source={usernameImg}
                    placeholder="Kullanıcı Adı"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
                <UserInput
                    onChange={this.props.phoneChange}
                    value={this.props.phoneVal}
                    maxLength={11}
                    minLength={11}
                    keyboardType="number-pad"
                    source={phoneImg}
                    placeholder="Telefon Numarası"
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                />
                <UserInput
                    onChange={this.props.passChange}
                    value={this.props.passVal}
                    source={passwordImg}
                    secureTextEntry={this.state.showPass}
                    placeholder="Parola"
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.btnEye}
                    onPress={this.showPass}>
                    <Image source={eyeImg} style={styles.iconEye}/>
                </TouchableOpacity>


            </KeyboardAvoidingView>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 100,
        right: 30,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
});
