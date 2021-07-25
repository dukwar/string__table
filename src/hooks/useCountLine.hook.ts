import {useCallback} from "react";
import deburr from "lodash/deburr";


// custom hook useCountLine
export const useCountLine = () => {

    // 1. Using Unicode properties, we find all words in sentences
    // 2. Words separated by a dash and some other symbols are counted as two words
    const getCountWord = useCallback((str: string) => {
        let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+/gui
        return str.match(regexp)?.length
    }, [])

    // 1. in this case, we use the deburr function from lodash library, the normalize method and search for a given range
    // 2. remove the "й" since the normalize method cuts off all symbols and the letter turns into the letter "и"
    const getCountVowels = useCallback((str: string) => {
        const newStr = str.replace(/й/gi, '')
        const newStrUnDiacritics = deburr(newStr)
        return newStrUnDiacritics.normalize('NFD').match(/[aeiouауоыиэяюёеі]/gi)?.length
    }, [])

    return {getCountWord, getCountVowels}

}

