import React from "react"
import {ActivityIndicator} from "react-native"

const Loading = (props) => {
    return (
        <ActivityIndicator
            size={25}
            color="#4a148c"
            style={{
                color: "#4a148c",
                marginTop: 50
            }}
        />
    )
}
export default Loading;