import {combineReducers} from 'redux'
import userReducers from "./user"
import postReducers from "./post"

export default combineReducers({
    user: userReducers,
    post: postReducers
})