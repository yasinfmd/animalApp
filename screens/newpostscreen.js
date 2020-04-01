import React, {Component} from "react";
import {connect} from "react-redux"
import CustomHeader from "../components/customHeader";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import {Image, TouchableOpacity} from "react-native"
import {Container, Content, Form, Button, View, Text,Icon} from 'native-base';
import {addPost, fetchCategory, fetchAnimalType} from "../actions"
import FormInput from "../components/formInput";
import FormPicker from "../components/formPicker";
import FormPickerItem from "../components/formPickerItem";
import Loading from "../components/loading";
import PageList from "../components/list";
import PageListItem from "../components/listItem";
import {showMsg} from "../utils";


class NewPostScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            animalloading: false,
            post: {
                title: "",
                content: "",
            },
            selected: undefined,
            selectedtype: undefined,
            image: null,
            postimg: null,
            imageList: [],
            photos: []
        }
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    fetchAnimalType = () => {
        this.setState({
            animalloading: true
        })
        this.props.fetchAnimalType().then((res) => {
            this.setState({
                animalloading: false
            })
        }).catch((err) => {
            this.setState({
                animalloading: false
            })
        })
    }

    fetchCategory = () => {
        this.setState({
            loading: true
        })
        this.props.fetchCategory().then((res) => {
            this.setState({
                loading: false
            })
        }).catch((err) => {
            this.setState({
                loading: false
            })
        })
    }

    componentDidMount() {

        if (this.props.animaltype.animaltype.length < 1) {
            this.fetchAnimalType()

        }
        if (this.props.category.category.length < 1
        ) {
            this.fetchCategory()

        }
        console.log(this.state)
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            debugger
            if (this.props.route.params != undefined) {
                if (this.props.route.params.photos != undefined && this.props.route.params.photos.length > 0) {

                    let data = []
                    this.props.route.params.photos.forEach((item) => {
                        data.push({
                            base64: item.base64,
                            uri: item.uri,
                            name: item.name,
                            type: item.type,
                            img: "data:image/png;base64," + item.base64
                        })
                    })

                    this.setState({imageList: data})
                    console.log("local", data)
                    console.log("resimlistesi", this.state.imageList);
                }
                console.log("rotadan", this.props.route.params)
            }
        });

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
        debugger
        if (this.state.post.title.trim() == "") {
            debugger
            showMsg("Uyarı", "İlan Başlığı Giriniz", false)
        } else if (this.state.post.content.trim() == "") {
            debugger
            showMsg("Uyarı", "İlan Açıklaması Giriniz", false)
        } else if (this.state.selected == 0 || this.state.selected == undefined) {
            debugger
            showMsg("Uyarı", "İlan Kategorisi Seçiniz", false)
        } else if (this.state.selectedtype == 0 || this.state.selectedtype == undefined) {
            debugger
            showMsg("Uyarı", "İlan Türü Seçiniz", false)
        } else if (this.state.imageList.length < 1) {
            showMsg("Uyarı", "İlana  Ait Resim Seçiniz", false)
        } else {
            this.createUserPost()
        }
    }
    createUserPost = () => {
        this.props.addPost({
            title: this.state.post.title,
            pcontent: this.state.post.content,
            userid: this.props.user.user[0].id,
            category: this.state.selected,
            type: this.state.selectedtype,
            imagelist: this.state.imageList
        }).then((res) => {

        }).catch((err) => {
            debugger
        })
        this.props.navigation.navigate("AnaSayfa")

    }

    renderPickerItem = () => {
        debugger
        let pickerItem;
        if (this.state.loading === true) {
            pickerItem = (
                <Loading/>
            );
        } else {
            if (this.props.category.category.length > 0) {
                debugger

                pickerItem = this.props.category.category.map((item, i) => (
                    <FormPickerItem key={item.id} label={item.catName} value={item.id}/>

                ));
            }
        }
        return pickerItem;
    }
    renderAnimalTypePicker = () => {
        debugger
        let pickerItem;
        if (this.state.animalloading === true) {
            debugger
            pickerItem = (
                <Loading/>
            );
        } else {
            debugger
            if (this.props.animaltype.animaltype.length > 0) {
                debugger

                pickerItem = this.props.animaltype.animaltype.map((item, i) => (
                    <FormPickerItem key={item.id} label={item.atypeName} value={item.id}/>

                ));
            }
        }
        return pickerItem;
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
    deleteImageList = (img) => {
        let deleted = this.state.imageList.filter((item) => {
            return img.uri != item.uri
        })
        this.setState({
            imageList: deleted
        })
    }

    render() {
        return (
            <Container>

                <CustomHeader iconame={"arrow-back"} headertitle={"Gönderi Oluştur"} headerleftPress={() => {
                    this.props.navigation.pop();
                }}/>
                <Content>
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center", paddingTop: 50}}>
                        <TouchableOpacity onPress={() => {
                            this.getPermissionAsync()
                        }}>

                            <Text>  <Icon name={"image"}/> Resim Seç</Text>

                        </TouchableOpacity>
                    </View>
                    {this.state.imageList.length > 0 ? (
                        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                            <PageList horizontal={true} items={this.state.imageList}
                                      renderRow={(item, i) => (
                                          <PageListItem uri={item.img} onPress={() => {
                                              this.deleteImageList(item)
                                          }}/>
                                      )}>
                            </PageList>

                            <Text>Toplam Seçilen Resim : {this.state.imageList.length}</Text>
                        </View>) : null}
                    {this.state.imageList.length > 0 ?
                        (<Form>
                            <FormInput stackedLabel label={"Başlık"}
                                       focus={true}
                                       value={this.state.post.title}
                                       type={"default"}
                                       onChangeText={(e) => {
                                           this.setState({
                                               post: {
                                                   content: this.state.post.content,
                                                   title: e
                                               }
                                           })
                                       }}
                            />
                            <FormInput stackedLabel label={"Açıklama"}
                                       multiline
                                       numberOfLines={5}
                                       focus={true}
                                       value={this.state.post.content}
                                       type={"default"}
                                       onChangeText={(e) => {
                                           this.setState({
                                               post: {
                                                   title: this.state.post.title,
                                                   content: e
                                               }
                                           })
                                       }}
                            />

                            {this.state.loading == true ? <Loading/> : (
                                <FormPicker selected={this.state.selected} onValueChange={(item) => {
                                    this.setState({
                                        selected: item
                                    })
                                }}>
                                    {this.renderPickerItem()}
                                </FormPicker>)}
                            {this.state.animalloading == true ? <Loading/> : (
                                <FormPicker selected={this.state.selectedtype} onValueChange={(item) => {
                                    this.setState({
                                        selectedtype: item
                                    })
                                }}>
                                    {this.renderAnimalTypePicker()}
                                </FormPicker>)}


                        </Form>) : null
                    }
                    <View>
                        {this.state.imageList.length > 0 ? (<Button block success style={{padding: 20, margin: 25}}
                                                                    onPress={() => this.postValidation()}>
                            <Text>Kaydet</Text>
                        </Button>) : null}

                    </View>

                </Content>


            </Container>

        )
    }
}

const mapStateToProps = state => {
    return {
        category: state.category,
        user: state.user,
        animaltype: state.animaltype
    };
};

export default connect(mapStateToProps, {addPost, fetchCategory, fetchAnimalType})(NewPostScreen)