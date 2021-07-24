import {TypedUseSelectorHook, useSelector} from "react-redux";
import {reducersType} from "../redux";

// custom hook useTypesSelector, which has a type

export const useTypesSelector:TypedUseSelectorHook<reducersType> = useSelector