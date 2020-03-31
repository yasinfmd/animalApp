import React from "react"
import {Item, Label, Picker} from "native-base";

const formPickerItem = (props) => {
    return (
        <Picker.Item  label={props.label} value={props.value} {...props} />
    )
}
export default formPickerItem;