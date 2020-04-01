import React from "react";
import {
    View,
    Card,
    CardItem,
    Badge,
    Thumbnail,
    Text,
    Left,
    Right,
    Body,
    Icon,
    Button
} from "native-base";
import {Image} from "react-native";
import Swiper from "react-native-swipe-image";
import ImageSwiper from "../components/imageSwiper"

export default class  animalPost extends React.Component {
    constructor(props) {
        super(props);
    }

    //
    render() {
        let gender = "";
        if (this.props.gender == 1) {
            gender =
                "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-1-512.png";
        } else if (this.props.gender == 0) {
            gender =
                "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-5-128.png";
        } else {
            gender =
                "https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Profile01-128.png";
        }
        return (
            <Card style={{flex: 0, margin: 5, marginTop: 5, marginBottom: 25}} >
                <CardItem>
                    <Thumbnail
                        style={{width: 25, height: 50}}
                        source={{uri: gender}}
                    />
                    <Left>
                        <Body>
                            <Text>{this.props.user}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Badge primary>
                            <Text>{this.props.category}</Text>
                        </Badge>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <View style={{flex: 1}}>
                            <ImageSwiper images={this.props.images}/>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text> Başlık : {this.props.title}</Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text> Açıklama : {this.props.content}</Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text> Tür : {this.props.type}</Text>
                        </View>
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button active transparent onPress={this.props.likePress}>
                            <Icon name={this.props.iconStatus} style={{color: "red"}}/>
                            <Text>{this.props.likeCount}</Text>
                        </Button>
                    </Left>
                    <Body>
                        {this.props.likeCount == 0 ? null : (
                            <Button transparent onPress={this.props.onPress}>
                                <Icon active name="eye"/>
                                <Text>Beğenileri Gör</Text>
                            </Button>
                        )}
                    </Body>
                </CardItem>
            </Card>
        );
    }
}
