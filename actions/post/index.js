import axios from "axios";
import {createPost, getPost, likeOrUnlikePost, userPost} from "../../reducers/post/const";
import {Alert} from "react-native";


export const fetcUserPost = data => {
    return dispatch => {
        debugger
        return axios
            .post("http://192.168.1.105:8002/api/userPost", data)
            .then(res => {
                debugger
                if (res.status === 200) {
                    dispatch({
                        type: userPost,
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
}

export const fetchPosts = data => {
    return dispatch => {
        return axios
            .get("http://192.168.1.105:8002/api/animalpost")
            .then(res => {
                if (res.status === 200) {
                    ;
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

    return dispatch => {
        return axios
            .post("http://192.168.1.105:8002/api/animalpost", data)
            .then(res => {
                if (res.status === 200) {
                    dispatch({
                        type: createPost,
                        payload: res.data[0]
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
                console.log("hata", err.response);
                // return err;
            });
    };
}

export const likePost = (data, index) => {

    return dispatch => {
        axios
            .post("http://192.168.1.105:8002/api/likeorunlike", {postid: data.postid, userid: data.userid})
            .then(res => {
                if (res.status === 200) {
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
