import React from "react"
import {Icon, Item, Picker,Label} from "native-base";

const formPicker = (props) => {
    return (
        <Item picker >
            <Picker
                note={false}
                mode="dropdown"
                iosIcon={<Icon name="arrow-down"/>}
                style={{width: undefined}}
                placeholder={props.placeholder}
                placeholderStyle={{color: "#bfc6ea"}}
                placeholderIconColor="#007aff"
                selectedValue={props.selected}
                onValueChange={props.onValueChange}
            >
                {props.children}
            </Picker>
        </Item>
    )
}
export default formPicker;