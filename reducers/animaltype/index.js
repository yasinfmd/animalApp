import {getAnimalType} from "../animaltype/const";

const INITIAL_STATE = {
    animaltype: []
}
export default (state = INITIAL_STATE, action) => {
    debugger

    switch (action.type) {
        case getAnimalType:
            debugger
            return Object.assign({}, state, {
                animaltype: action.payload,
            });
    }
    return state
}