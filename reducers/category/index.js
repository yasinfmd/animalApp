import {getCategory} from "../category/const";

const INITIAL_STATE = {
    category: []
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case getCategory:
            return Object.assign({}, state, {
                category: action.payload,
            });
    }
    return state
}