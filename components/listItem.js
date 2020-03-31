import React from "react";
import {TouchableOpacity} from "react-native"
import {ListItem, Left, Right, Body, Thumbnail, Icon,Text} from "native-base";

const PageListItem = (props) => {
    return (
        <ListItem thumbnail>
            <Left>
                <TouchableOpacity onPress={props.onPress}>
                    <Icon name={"trash"} active={true} style={{color: "red"}}/>
                </TouchableOpacity>
            </Left>
            <Body>
                <Thumbnail avatar source={{uri: props.uri}}/>
            </Body>
            <Right>
            </Right>
        </ListItem>
    )
}
export default PageListItem;