import React from "react"
import {Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right} from 'native-base';

const profileCard = (props) => {
    let gender = "";
    let genderText = "Belirtilmedi";
    if (props.user.gender == 1) {
        genderText = "Erkek"
        gender = "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-1-512.png"
    } else if (props.user.gender == 0) {
        genderText = "Kadın"
        gender = "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-5-128.png"
    } else {
        genderText = "Belirtilmedi"
        gender = "https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Profile01-128.png"
    }
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{uri: gender}}/>
                    <Body>
                        <Text>{props.user.uFullName}</Text>
                        <Text note>{props.user.phone}</Text>
                        <Text note>{genderText}</Text>
                    </Body>
                </Left>
            </CardItem>
        </Card>
    )
}
export default profileCard;