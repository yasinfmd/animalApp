import React, {Component} from "react";
import {connect} from "react-redux"
import CustomHeader from "../components/customHeader";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {Image, TouchableOpacity, Platform} from "react-native"
import {Container, Header, Content, Form, Item, Input, Label, Picker, Icon, Button, View, Text} from 'native-base';
import {addPostImage} from "../actions"
import {ImageBrowser} from 'expo-image-picker-multiple';

class NewPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected2: undefined,
            image: null,
            postimg: null,
            imageList: [],
            photos: []
        }
    }
    componentWillUnmount() {
        this._unsubscribe();
    }
    componentDidMount(){
            debugger
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            // do something
            console.log(this.props.route.params)
        });
        alert("selam")
    }
    componentDidUpdate() {
        alert("test")
        debugger
        console.log("test");
        debugger
        const {params} = this.props.navigation.state;
        console.log(params)
        if (params) {
            const {photos} = params;
            if (photos) this.setState({photos});
            delete params.photos;
        }
    }

    _pickImage = async () => {


        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            base64: true,
            quality: 1
        });
        debugger
//data:image/jpeg;base64,
        if (!result.cancelled) {
            debugger
            this.setState({image: result.uri, postimg: result});


        }


    };
    postValidation = () => {

    }

    uploadPost = () => {
        debugger
        /*   var formdata = new FormData();
           formdata.append("file", this.state.postimg);*/
        debugger
        let formData = new FormData()
        formData.append('file', this.state.postimg)
        this.props.addPostImage(formData).then((res) => {
            debugger
        }).catch((err) => {
            debugger
        })
        /*      axios.post("http://192.168.1.105:8002/api/file", {ad: "yasin"}).then((res) => {
                  debugger
              }).catch((err) => {
                  debugger
              })*/
    }
    getPermissionAsync = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
        } else {
            this.props.navigation.navigate("ImageBrowser")
            //this._pickImage()
        }
    }

    render() {
        return (
            <Container>

                <CustomHeader iconame={"arrow-back"} headertitle={"Gönderi Oluştur"} headerleftPress={() => {
                    this.props.navigation.pop();
                }}/>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>Username</Label>
                            <Input/>
                        </Item>
                        <Item stackedLabel last>
                            <Label>Password</Label>
                            <Input/>
                        </Item>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down"/>}
                                style={{width: undefined}}
                                placeholder="Select your SIM"
                                placeholderStyle={{color: "#bfc6ea"}}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.selected2}
                                /*   onValueChange={this.onValueChange2.bind(this)}*/
                            >
                                <Picker.Item label="Yasin" value="key0"/>
                                <Picker.Item label="ATM Card" value="key1"/>
                                <Picker.Item label="Debit Card" value="key2"/>
                                <Picker.Item label="Credit Card" value="key3"/>
                                <Picker.Item label="Net Banking" value="key4"/>
                            </Picker>
                        </Item>


                    </Form>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 50}}>
                        <TouchableOpacity onPress={() => {
                            this.getPermissionAsync()
                        }}>
                            <Text>Merhaba</Text>

                        </TouchableOpacity>
                    </View>
                    {this.state.image &&
                    <Image source={{uri: this.state.image}} style={{width: 200, height: 200}}/>}

           {/*         <ImageBrowser
                        max={10}
                        onChange={(callback) => {
                            debugger
                        }}
                        callback={(num, onSubmit) => {
                            debugger
                        }}
                    />*/}
                    <TouchableOpacity onPress={() => {
                        this.test()
                    }}>
                        <Text>Bıktıkya</Text>

                    </TouchableOpacity>
                </Content>


            </Container>

        )
    }
}


export default connect(null, {addPostImage})(NewPostScreen)