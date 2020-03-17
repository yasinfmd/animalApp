import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity,Platform} from 'react-native';

export default class SignupSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.props.onCreateAccount}>
                    <Text style={styles.text}>Hesap Oluştur</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.forgotPassword}>
                    <Text style={styles.text}>Parolamı Unuttum?</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
SignupSection.propTypes = {
    onCreateAccount: PropTypes.func,
    forgotPassword: PropTypes.func,
};

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 100,
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});
