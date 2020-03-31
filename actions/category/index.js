import axios from "axios";
import {getCategory} from "../../reducers/category/const";
import {Alert} from "react-native";

export const fetchCategory = data => {
    debugger;
    return dispatch => {
        return axios
            .get("http://192.168.1.105:8002/api/category")
            .then(res => {
                if (res.status === 200) {
                    res.data.unshift({id:0,catName:"Kategori Seçiniz"})
                    dispatch({
                        type: getCategory,
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



