import {getPost, createPost, likeOrUnlikePost} from "../post/const";

const INITIAL_STATE = {
    posts: []
}
export default (state = INITIAL_STATE, action) => {
    debugger

    switch (action.type) {
        case getPost:
            debugger

            return Object.assign({}, state, {
                posts: action.payload,
            });

        case likeOrUnlikePost:
            debugger
        //TODO
        /*           let likedPost = state.posts
                   let like = []
                   if (state.posts[action.payload.index].like.length > 0) {
                       like = state.posts[action.payload.index].like.filter((item)=>{
                           return item.id != action.payload.data.userid

                       })
                   }
                   likedPost[action.payload].userLike = !likedPost[action.payload.index].userLike
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