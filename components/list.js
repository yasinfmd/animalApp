import React from "react";
import {List} from 'native-base';

const PageList = (props) => {
    return (
        <List dataArray={props.items} horizontal={props.horizontal} renderRow={props.renderRow}>

        </List>
    )
}
export default PageList;