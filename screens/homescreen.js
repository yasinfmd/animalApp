import React from "react"
import {RefreshControl} from "react-native"
import {
    Container,
    Text,
    Content,
} from 'native-base';
import CustomHeader from "../components/customHeader"
import {fetchPosts, likePost} from "../actions"
import {connect} from "react-redux"
import Loading from "../components/loading";
import AnimalPost from "../components/animalPost";

class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            refreshing: false
        }
    }

    fetchPost = () => {
        this.setState({
            loading: true
        })
        this.props.fetchPosts().then((res) => {
            debugger
            this.setState({
                loading: false
            })
        }).catch((err) => {
            debugger
            this.setState({
                loading: false
            })
        })
    }

    componentDidMount() {
        this.fetchPost()
    }

    onRefresh = () => {
        this.fetchPost()
    }
    routeLikedUser = (item) => {
        this.props.navigation.navigate("Begenenler", {likes: item})
    }

    likePost = (item, index) => {
        console.log("like", item)
        let data = {
            postid: item.id,
            userid: item.user[0].id
        }
        debugger
        this.props.likePost(data, index).then((res) => {
            debugger
        }).catch((err) => {
            debugger
        })
    }
    renderPosts = () => {
        let postItem;
        if (this.state.loading === true) {
            postItem = (
                <Loading/>
            );
        } else {
            if (this.props.posts.posts.length > 0) {
                debugger
                this.props.posts.posts.forEach((item) => {
                    debugger
                    item.like.forEach((user) => {
                        debugger
                        if (this.props.user.user[0].id == item.user[0].id) {
                            debugger
                            item.userLike = true
                        } else {
                            debugger
                            item.userLike = false
                        }
                    })
                })
                postItem = this.props.posts.posts.map((item, i) => (

                    <AnimalPost
                        likePress={() => {
                            this.likePost(item, i)
                        }}
                        onPress={() => {
                            this.routeLikedUser(item.like)
                        }}
                        type={item.animaltype.atypeName}
                        content={item.content}
                        iconStatus={item.userLike == true ? 'heart' : "md-heart-empty"}
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

    bottom(e) {
        alert('Swipe Bottom')
    }

    top(e) {
        alert('Swipe Top')
    }

    render() {
        return (
            <Container>
                <CustomHeader iconame={"menu"} headertitle={"AnaSayfa"} headerleftPress={() => {
                    this.props.navigation.toggleDrawer();
                }}/>
                <Content style={{padding: 10}}

                         refreshControl={
                             <RefreshControl
                                 onRefresh={this.onRefresh}
                                 refreshing={this.state.refreshing}
                                 title="Yükleniyor"
                                 progressBackgroundColor={'#fff'}
                             />
                         }
                         scrollEventThrottle={2500}

                >
                    {this.state.loading == true ? <Loading/> : this.renderPosts()}

                </Content>


            </Container>
        )
    }
}

const mapStateToProps = state => {
    debugger;
    return {
        posts: state.post,
        user: state.user
    };
};
export default connect(mapStateToProps, {fetchPosts, likePost})(HomeScreen)