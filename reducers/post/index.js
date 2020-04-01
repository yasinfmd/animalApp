import {getPost, createPost, likeOrUnlikePost, userPost} from "../post/const";

const INITIAL_STATE = {
    posts: [],
    userposts: []
}
export default (state = INITIAL_STATE, action) => {
    debugger

    switch (action.type) {
        case getPost:
            debugger

            return Object.assign({}, state, {
                posts: action.payload,
            });
        case userPost:
            debugger

            return Object.assign({}, state, {
                userposts: action.payload,
            });

        case createPost:
            debugger
            action.payload.userLike = false
            let joined = state.posts;
            joined.unshift(action.payload)
            return Object.assign({}, state, {
                posts: joined
            });

        case likeOrUnlikePost:
            debugger
            //likedPost[action.payload].userLike = !likedPost[action.payload.index].userLike
            let likedPost = state.posts
            let like = []
            if (action.payload.data.likeType === true) {
                //pushlanacak
                state.posts[action.payload.index].like.push(action.payload.data.user)
                like = state.posts[action.payload.index].like
                /*     return item.id != action.payload.data.userid*/

            } else {
                like = state.posts[action.payload.index].like.filter((item) => {
                    return item.id != action.payload.data.userid
                })
            }
            likedPost[action.payload.index].like = like
            let obj = Object.assign({}, state, {
                posts: likedPost,
            });
            return obj
        //TODO
        /*           let likedPost = state.posts
                   let like = []
                   if (state.posts[action.payload.index].like.length > 0) {
                       like = state.posts[action.payload.index].like.filter((item)=>{
                           return item.id != action.payload.data.userid

                       })
                   }

                   debugger
                   likedPost[action.payload].like = like
                   debugger
                   let obj = Object.assign({}, state, {
                       posts: likedPost,
                   });
                   debugger
                   return obj*/
    }
    return state
}