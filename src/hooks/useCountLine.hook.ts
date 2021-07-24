import {useCallback} from "react";
import deburr from "lodash/deburr";


// custom hook useCountLine
export const useCountLine = () => {

    // 1. the function uses the deburr function from the lodash library, which strips off unnecessary diacritics symbols at the line
    // 2. does not work for the Russian alphabet, so you should use the normalize method
    // 3. normalize returns the Unicode normalization form, but adds unnecessary symbols to the string that the replace range does not see,
    // so you should strip the string and leave everything you need, additionally removing the dash with spaces
    const getCountWord = useCallback((str: string) => {
        const newStr = deburr(str)
        return newStr.normalize('NFD').replace(/\s-\s/gi, ' ').replace(/[^-,/a-zа-яёі\s\d+−–—]/gi, '').match(/[-a-zа-яёі\d+]+/gi)?.length

    }, [])

    // 1. in this case, we also use the deburr function, the normalize method and search for a given range
    // 2. remove the "й" since the normalize method cuts off all symbols and the letter turns into the letter "и"
    // 3. Thus, the delimiter can be anything
    const getCountVowels = useCallback((str: string) => {
        const newStr = str.replace(/й/gi, '')
        const newStrUnDiacritics = deburr(newStr)
        return newStrUnDiacritics.normalize('NFD').match(/[aeiouауоыиэяюёеі]/gi)?.length
    }, [])

    return {getCountWord, getCountVowels}

}

