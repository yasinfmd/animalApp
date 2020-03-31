import {combineReducers} from 'redux'
import userReducers from "./user"
import postReducers from "./post"
import categoryReducers from "./category"
import animalTypeReducers from "./animaltype"

export default combineReducers({
    user: userReducers,
    post: postReducers,
    category: categoryReducers,
    animaltype: animalTypeReducers

})