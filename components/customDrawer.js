import React from "react";
import {ImageBackground} from "react-native"
import {FlatList, TouchableOpacity, Image} from "react-native";
import {Container, Header, Text, Content, ListItem, List} from "native-base";

const CustomDrawer = (props) => {
    return (
        <Container>
            <Content>
                <ImageBackground
                    source={{
                        uri:
                            "https://www.deutschland.de/sites/default/files/styles/crop_page/public/media/image/germany_nature_forest.jpg?h=d330f233&itok=2SrYiLCn"
                    }}
                    style={{
                        height: 250,
                        width: "100%",
                        alignSelf: "stretch",
                        position: "absolute"
                    }}
                >
                    <Text style={{color: "white", padding: 20, marginTop: 200}}>Yasin Dalkılıç</Text>
                </ImageBackground>


                <List
                    dataArray={["AnaSayfa", "Profil", "Gönderilerim", "Beğendiklerim"]}
                    contentContainerStyle={{marginTop: 250}}
                    renderRow={data => {
                        return (
                            <ListItem
                                button
                                key={data}
                                onPress={() => props.navigation.navigate(data)}
                            >
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}
                />
            </Content>
        </Container>
    );


    /*    onRouteItem = item => {
            this.props.navigation.navigate(item);
        };*/


}
export default CustomDrawer;
