import axios from "axios";
import {createPost, getPost, likeOrUnlikePost} from "../../reducers/post/const";
import {Alert} from "react-native";
import {exp} from "react-native-reanimated";

export const fetchPosts = data => {
    debugger;
    return dispatch => {
        return axios
            .get("http://192.168.1.105:8002/api/animalpost")
            .then(res => {
                if (res.status === 200) {
                    debugger;
                    dispatch({
                        type: getPost,
                        payload: res.data
                    });
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


export const addPost = (data) => {
    debugger
    return dispatch => {
        return axios
            .post("http://192.168.1.105:8002/api/animalpost", data)
            .then(res => {
                if (res.status === 200) {
                    debugger;
                }
                return res;
            })
            .catch(err => {
                debugger
                Alert.alert(
                    "Uyarı",
                    "Beklenmeyen Bir Hata Gerçekleşti Lütfen Daha Sonra Tekrar Dene",
                    [{
                        text: "Tamam", onPress: () => {
                        }
                    }],
                    {cancelable: false}
                );
                console.log("hata", err.response);
                debugger
                // return err;
            });
    };
}

export const likePost = (data, index) => {
    debugger
    return dispatch => {
        axios
            .post("http://192.168.1.105:8002/api/likeorunlike", {postid: data.postid, userid: data.userid})
            .then(res => {
                if (res.status === 200) {
                    debugger;
                    dispatch({
                        type: likeOrUnlikePost,
                        payload: {
                            index: index,
                            data: data
                        }
                    });
                }
                //return res;
            })
            .catch(err => {
                console.log("hata", err);
                Alert.alert(
                    "Uyarı",
                    "Beklenmeyen Bir Hata Gerçekleşti Lütfen Daha Sonra Tekrar Dene",
                    [{
                        text: "Tamam", onPress: () => {
                        }
                    }],
                    {cancelable: false}
                );
                /*      return err;*/
            });
    };
}
