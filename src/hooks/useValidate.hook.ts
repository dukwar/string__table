import {useCallback} from "react";

// custom hook useValidate

export const useValidate = () => {

    // 1. in this function, we cut off all leading zeros and check if the numbers entered by the user go beyond the set
    const isValidNums = useCallback((str: string) => {

        const newStr = str.replace(/^0+/g, '').match(/\d+/gi)
        return newStr && newStr.map((item) => Number(item)).some((item) => item < 1 || item > 20)

    }, [])

    // 1. in this case, we also strip off all leading zeros,
    // we look for all numerical values, we search for unique values, and also leave only valid values
    // 2. However, formik does not allow submitting the form if errors occurred during validation, so the last part of the code remains frozen
    // 3. Also, one more task condition has not been met - the numbers in the input must be separated by "," or ";", which in principle loses the need when using the "replace-match" methods
    // 4. any letters and other values ignored as they are not iterable

    const getValidHttpArray = useCallback((str: string) => {

        const newStr = str.replace(/^0+/g, '').match(/\d+/gi)
        return newStr && Array.from(new Set(newStr)).map((item) => Number(item)).filter((item) => item > 0 && item <= 20)

    }, [])

    return {getValidHttpArray, isValidNums}
}