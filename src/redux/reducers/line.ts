import {SET_FETCHING, SET_LINE} from "../constants";
import {lineActionType} from "../actions/types";
import {linesType} from "./types";


const initialState = {
    lines: [] as linesType[],
    isFetching: false
}


// a function that checks if the state has a string that came to us from a request

const linesEqual = (lines:linesType[], line:linesType) => {

    for (let item of lines) {
        if (line.text === item.text) {
            return true
        }
    }
    return false
}


type initialStateType = typeof initialState

const line = (state = initialState, action: lineActionType): initialStateType => {

    switch (action.type) {
        case SET_LINE:

            const equal = linesEqual(state.lines, action.payload)

            return {
                ...state,
                lines: !equal ? [...state.lines, action.payload] : [...state.lines]
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        default:
            return state
    }
}

export default line