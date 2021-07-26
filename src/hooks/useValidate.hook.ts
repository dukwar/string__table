import {useCallback} from "react";

// custom hook useValidate

export const useValidate = () => {

    // 1. in this function, we remove all spaces, and also separate elements with a separator - ";" or "," and check if the numbers entered by the user go beyond the set
    const isValidNums = useCallback((str: string) => {

        const newStr = str.replace(/\s/g, '').split(/,|;/)
        const index = newStr.indexOf('')
        index > -1 && newStr.splice(index, 1)
        return newStr && newStr.map((item) => Number(item)).some((item) => item < 1 || item > 20 || isNaN(item))

    }, [])

    // 1. in this case, we remove all spaces, and also separate elements with a separator - ";" or ",", search for unique values, and also leave only valid values

    const getValidHttpArray = useCallback((str: string) => {

        const newStr = str.replace(/\s/, '').split(/,|;/)
        return newStr && Array.from(new Set(newStr)).map((item) => Number(item))

    }, [])

    return {getValidHttpArray, isValidNums}
}