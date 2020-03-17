import {userLogin} from "./const";

const INITIAL_STATE = {
    user: []
}
export default (state = INITIAL_STATE, action) => {
    debugger
    switch (action.type) {
        case userLogin:
            debugger

            return Object.assign({}, state, {
                user: action.payload,
            });
    }
    return state
}