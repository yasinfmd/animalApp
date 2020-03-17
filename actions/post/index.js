import axios from "axios";
import {createPost, getPost, likeOrUnlikePost} from "../../reducers/post/const";
import {Alert} from "react-native";

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
export const likePost = (data, index) => {
    debugger
    return dispatch => {
        return axios
            .post("http://192.168.1.105:8002/api/likeorunlike", data)
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
}
