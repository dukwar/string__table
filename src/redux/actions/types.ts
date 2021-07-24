import {SET_LINE, SET_FETCHING} from "../constants"
import {linesType} from "../reducers/types";

// line

interface setLineType {
    type: typeof SET_LINE,
    payload: linesType,
}

interface setFetchingType {
    type: typeof SET_FETCHING,
    payload: boolean
}


export type lineActionType = setFetchingType | setLineType