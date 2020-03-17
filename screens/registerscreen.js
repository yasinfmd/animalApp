import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Logo from '../components/Logo';
import RegisterForm from '../components/RegisterForm';
import Wallpaper from '../components/Wallpaper';
import ButtonSubmit from '../components/ButtonSubmit';
import RegisterSection from "../components/RegisterSection";
import {emailValidator, showMsg, passwordValidator, phoneNumValidator} from "../utils"
import {connect} from "react-redux"
import {createUser} from "../actions"

class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: "",
            userphone: "",
            password: "",
        }
    }

    onFormValidation = () => {
        this.setState({
            isLoading: true,
        })
        if (!emailValidator(this.state.username.trim())) {
            showMsg("Uyarı", "Geçerli Bir Email Adresi Giriniz", false)
        } else if (phoneNumValidator(this.state.userphone.trim())) {
            showMsg("Uyarı", "Geçerli Bir Telefon Numarası  Giriniz", false)
        } else if (!passwordValidator(this.state.password.trim())) {
            showMsg("Uyarı", "Geçerli Bir Parola  Giriniz", false)
        } else {
            debugger
            this.props.createUser({
                username: this.state.username,
                phone: this.state.userphone,
                password: this.state.password
            }).then((res) => {
                if (res.status === 200) {
                    showMsg("Bilgi", "Kaydınız Başarıyla Gerçekleşti", false)
                    this.props.navigation.navigate("Login");
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
                <Logo logoTxt={"HAYVAN SEV UYGULMASINA KAYIT OL"}/>
                <RegisterForm
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
                    phoneChange={(text) => {
                        this.setState({
                            userphone: text
                        })
                    }}
                    phoneVal={this.state.userphone}
                />
                <RegisterSection onPressNavigate={() => {
                    this.props.navigation.navigate("Login")
                }}></RegisterSection>
                <ButtonSubmit btnText={"Kayıt Ol"}
                              isLoading={this.state.isLoading}
                              onPress={() => {
                                  this.onFormValidation()
                              }}/>
            </Wallpaper>
        );
    }
}

export default connect(null, {createUser})(RegisterScreen);