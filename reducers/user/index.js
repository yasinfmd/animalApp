import {userLogin, authUser} from "./const";

const INITIAL_STATE = {
    user: []
}
export default (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        case userLogin:
            return Object.assign({}, state, {
                user: action.payload,
            });
        case authUser:
            return Object.assign({}, state, {
                user: action.payload,
            });
    }
    return state
}