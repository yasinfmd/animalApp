import React from "react";
import CustomHeader from "../components/customHeader";
import { TouchableOpacity } from "react-native";
import {
  ListItem,
  List,
  Text,
  Body,
  Right,
  Container,
  Left,
  Thumbnail,
  Icon
} from "native-base";

const likedUser = (props, route, navigation) => {
  function renderItem(users) {
    let listItem;
    listItem = users.map((item, i) => (
      <ListItem>
        <Left>
          <Thumbnail
            style={{ width: 25, height: 50 }}
            source={{
              uri:
                item.gender == 0
                  ? "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-5-128.png"
                  : item.gender == 1
                  ? "https://cdn3.iconfinder.com/data/icons/user-avatars-1/512/users-1-512.png"
                  : "https://cdn4.iconfinder.com/data/icons/standard-free-icons/139/Profile01-128.png"
            }}
          />
        </Left>
        <Body>
          <Text>{item.uFullName}</Text>
        </Body>
        <Right>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Profil", {
                user: item
              });
            }}
          >
            <Icon
              name={"eye"}
              style={{
                color: "#6729cc" + ""
              }}
            />
          </TouchableOpacity>
        </Right>
      </ListItem>
    ));
    return listItem;
  }
  const likes = props.route.params.likes;
  return (
    <Container>
      <CustomHeader
        iconame={"arrow-back"}
        headertitle={"Beğeniler"}
        headerleftPress={() => {
          props.navigation.pop();
        }}
      />
      <List>{renderItem(likes)}</List>
    </Container>
  );
};

export default likedUser;
