import React from "react";
import {Header, Left, Body, Right, Button, Icon, Title, Text} from 'native-base';

const CustomHeader = (props) => {
    return (
        <Header>
            <Left>
                <Button transparent onPress={props.headerleftPress}>
                    <Icon name={props.iconame}/>
                </Button>
            </Left>
            <Body>
                <Title>{props.headertitle}</Title>
            </Body>
            <Right>
                <Button transparent onPress={props.headerrightPress}>
                    <Icon name={props.righticon}/>
                </Button>
            </Right>
        </Header>
    );
}
export default CustomHeader;