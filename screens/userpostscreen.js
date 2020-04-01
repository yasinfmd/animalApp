import React from "react"

import {connect} from "react-redux"
import {StyleSheet} from "react-native"
import CustomHeader from "../components/customHeader";
import {Container, Header, Content, Card, CardItem, Text, Body, View} from "native-base";
import {Col, Row, Grid} from "react-native-easy-grid";
import {fetcUserPost} from "../actions/post";
import Loading from "../components/loading";
import AnimalPost from "../components/animalPost";
import {FlatGrid} from 'react-native-super-grid';

class UserPostScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }

    }

    componentDidMount(): void {
        this.fetch()
    }

    fetch = () => {
        this.setState({
            loading: true
        })
        this.props.fetcUserPost({userid: this.props.user.user[0].id}).then((res) => {
            debugger
            this.setState({
                loading: false
            })
        }).catch((err) => {
            this.setState({
                loading: false
            })
            debugger
        })
        console.log(this.props.post.userposts)
    }


    renderUserPost = () => {
        debugger
        let postItem;
        if (this.state.loading === true) {
            postItem = (
                <Loading/>
            );
        } else {
            if (this.props.post.userpost.length > 0) {
                debugger
                postItem = this.props.post.userposts.map((item, i) => (
                    <AnimalPost
                        key={i}
                        type={item.animaltype.atypeName}
                        content={item.content}
                        iconStatus={"heart"}
                        likeCount={item.like.length}
                        title={item.title}
                        user={item.user[0].uFullName} gender={item.user[0].gender}
                        category={item.category[0].catName}
                        images={item.file}/>
                ));
            }
        }
        return postItem;
    }

    render() {
        return (
            <Container>
                <CustomHeader iconame={"menu"} headertitle={"Gönderilerim"} headerleftPress={() => {
                    this.props.navigation.toggleDrawer();
                }}/>
                <Content>
                    {this.state.loading==true?<Loading/>:(
                        <FlatGrid
                            itemDimension={250}
                            items={this.props.post.userposts}
                            style={styles.gridView}
                            spacing={25}
                            renderItem={({item, index}) => (
                                <AnimalPost
                                    key={index}
                                    type={item.animaltype.atypeName}
                                    content={item.content}
                                    iconStatus={"heart"}
                                    likeCount={item.like.length}
                                    title={item.title}
                                    user={item.user[0].uFullName} gender={item.user[0].gender}
                                    category={item.category[0].catName}
                                    images={item.file}/>
                            )}
                        />
                    )}


                </Content>

            </Container>
        )
    }

}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});

const mapStateToProps = state => {
    debugger
    return {
        post: state.post,
        user: state.user
    };
};
export default connect(mapStateToProps, {fetcUserPost})(UserPostScreen)

