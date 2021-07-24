import {SET_FETCHING, SET_LINE} from "../constants";
import {Dispatch} from "redux";
import {lineActionType} from "./types";
import {linesType} from "../reducers/types";

export const setLine = (lines: linesType): lineActionType => {
    return {
        type: SET_LINE,
        payload: lines,
    }
}

export const setFetching = (data: boolean): lineActionType => {
    return {
        type: SET_FETCHING,
        payload: data
    }
}

// 1. we make a request in a loop using the library for asynchronous actions - redux-thunk
// 2. throwing an error for every unsuccessful request

export const getLines = (request: (url: string) => Promise<linesType | undefined>, lines: number[]) => async (dispatch: Dispatch<lineActionType>) => {

    dispatch(setFetching(true))
    for (let id of lines) {
        try {
            const res = await request(`https://tmgwebtest.azurewebsites.net/api/textstrings/${id}`)
            if (!res) {
                throw new Error(`the page at https://tmgwebtest.azurewebsites.net/api/textstrings/${id} is not available! Please try again later!`)
            }
            dispatch(setLine(res))

        } catch (e) {
            console.log(e.message)
        }
    }
    dispatch(setFetching(false))

}