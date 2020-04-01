import axios from "axios";
import {registerUser, userLogin, authUser} from "../../reducers/user/const";
import {Alert} from "react-native";
import {AsyncStorage} from "react-native"

export const authuser = data => {
    return dispatch => {
        dispatch({
            type: authUser, payload: data
        })
    }
}

export const loginUser = data => {
    debugger;
    return dispatch => {
        return axios
            .post("http://192.168.1.105:8002/api/login", data)
            .then(res => {
                if (res.status === 200) {
               
                    dispatch({
                        type: userLogin,
                        payload: res.data
                    });
                    AsyncStorage.setItem("user", JSON.stringify(res.data))
                } else if (res.status === 204) {
                    Alert.alert(
                        "Uyarı",
                        "Kullanıcı Adı Veya Parola Hatalı",
                        [{
                            text: "Tamam", onPress: () => {
                            }
                        }],
                        {cancelable: false}
                    );
                }
                return res;
            })
            .catch(err => {
           
                Alert.alert(
                    "Uyarı",
                    "Beklenmeyen Bir Hata Gerçekleşti Lütfen Daha Sonra Tekrar Dene",
                    [{
                        text: "Tamam", onPress: () => {
                        }
                    }],
                    {cancelable: false}
                );
                return err;
            });
    };
};

export const createUser = data => {
    debugger;
    return dispatch => {
        return axios
            .post("http://192.168.1.105:8002/api/register", data)
            .then(res => {
                if (res.status && res.status === 200) {
                } else if (res.status == 204) {
                    Alert.alert(
                        "Uyarı",
                        "Kullanıcı Adı Veya Telefon Numarası Kullanılmakta",
                        [{
                            text: "Tamam", onPress: () => {
                            }
                        }],
                        {cancelable: false}
                    );
                }
                return res;
            })
            .catch(err => {
                Alert.alert(
                    "Uyarı",
                    "Beklenmeyen Bir Hata Gerçekleşti Lütfen Daha Sonra Tekrar Dene",
                    [{
                        text: "Tamam", onPress: () => {
                        }
                    }],
                    {cancelable: false}
                );
                return err;
            });
    };
};
