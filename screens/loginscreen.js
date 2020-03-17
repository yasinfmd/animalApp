import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import Form from '../components/Form';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import SignupSection from '../components/SignupSection';
import {connect} from "react-redux"
import {createUser, loginUser} from "../actions"
import {emailValidator, passwordValidator, showMsg} from "../utils";

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: "",
            password: "",
        }
    }

    onFormValidation = () => {
        this.setState({
            isLoading: true,
        })
        if (!emailValidator(this.state.username.trim())) {
            showMsg("Uyarı", "Geçerli Bir Email Adresi Giriniz", false)
        } else if (!passwordValidator(this.state.password.trim())) {
            showMsg("Uyarı", "Geçerli Bir Parola  Giriniz", false)
        } else {
            debugger
            this.props.loginUser({
                username: this.state.username,
                password: this.state.password
            }).then((res) => {
                if (res.status === 200) {
                    debugger
                    this.props.navigation.navigate("AnaSayfa");
                }
            }).catch((err) => {
            })
        }
        this.setState({
            isLoading: false,
        })
    }

    render() {
        return (
            <Wallpaper>
                <Logo logoTxt={"HAYVAN SEV UYGULAMASINA GİRİŞ YAP"}/>
                <Form
                    passVal={this.state.password}
                    passChange={(text) => {
                        this.setState({
                            password: text
                        })
                    }}
                    nameVal={this.state.username}
                    nameChange={(text) => {
                        this.setState({
                            username: text
                        })
                    }}

                />
                <SignupSection
                    forgotPassword={() => {
                        this.props.navigation.navigate("Forgot")
                    }}
                    onCreateAccount={() => {
                        this.props.navigation.navigate("Register")
                    }}/>
                <ButtonSubmit btnText={"Giriş Yap"}
                              isLoading={this.state.isLoading}
                              onPress={() => {
                                  this.onFormValidation()
                              }}/>
            </Wallpaper>
        );
    }
}

export default connect(null, {loginUser})(LoginScreen);