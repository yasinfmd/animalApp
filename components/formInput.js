import React from "react"
import {ActivityIndicator} from "react-native"
import {Input, Item, Label} from "native-base";

const formInput = (props) => {
    return (
        <Item {...props}>
            <Label>{props.label}</Label>
            <Input
                returnKeyType={props.rtype}
                {...props}
                keyboardType={props.type}
                autoFocus={props.focus}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </Item>
    )
}
export default formInput;