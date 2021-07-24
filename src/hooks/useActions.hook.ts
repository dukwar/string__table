import * as lineActionCreators from "../redux/actions/line"
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";


export const useLinesActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(lineActionCreators, dispatch)
}