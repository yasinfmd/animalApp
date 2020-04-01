import axios from "axios";
import {getAnimalType} from "../../reducers/animaltype/const";
import {Alert} from "react-native";

export const fetchAnimalType = data => {
    return dispatch => {
        return axios
            .get("http://192.168.1.105:8002/api/animaltype")
            .then(res => {
                if (res.status === 200) {
                    res.data.unshift({id:0,atypeName:"Hayvan Türü Seçiniz"})
                    dispatch({
                        type: getAnimalType,
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



