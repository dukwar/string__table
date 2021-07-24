import {combineReducers} from "redux";
import line from "./reducers/line";


const rootReducer = combineReducers({
    line
})

export type reducersType = ReturnType<typeof rootReducer>

export default rootReducer