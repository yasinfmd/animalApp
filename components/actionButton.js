import React from "react"
import {View, Fab, Button, Icon} from 'native-base';

const actionButton = (props) => {
    return (
        <View style={{flex: 1}}>
            <Fab
                active={true}
                direction="up"
                containerStyle={{}}
                style={{backgroundColor: '#5067FF'}}
                position="bottomRight"
            >
            </Fab>

            <Fab direction="down" position="topLeft">

            </Fab>

        </View>
    )
}
export default actionButton;