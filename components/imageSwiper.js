import React from 'react';
import {StyleSheet, View, Image, ScrollView, Dimensions, Text, StatusBar, Platform} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

function ImageSwiper(props) {
    const handleClick = (e, item) => {
        const {swipeBottom, swipeTop} = props
        if (e.nativeEvent.contentOffset.y < 0) {
            swipeBottom(item)
        } else {
            swipeTop(item)
        }
    }
    const {images, imageHeight} = props
    console.log(images)
    const height = imageHeight && imageHeight > (screenHeight - Platform.OS === 'ios' ? 0
        : StatusBar.currentHeight) ? (screenHeight - Platform.OS === 'ios' ? 0 : StatusBar.currentHeight) : imageHeight;
    return (
        <ScrollView horizontal={true} pagingEnabled={true}>
            {images &&
            images.map((item, index) => {
                return (
                        <ScrollView key={index} onScrollEndDrag={(e) => handleClick(e, item)}>
                            <Image
                                style={{height: 400, width: screenWidth}}
                                source={{uri: item.filepath}}
                            />
                        </ScrollView>
                )
            })
            }
        </ScrollView>
    );
}

export default ImageSwiper;

const styles = StyleSheet.create({
    imageText: {
        position: 'absolute',
        bottom: 14,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
});
