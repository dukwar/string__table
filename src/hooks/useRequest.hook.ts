import {useCallback} from "react";
import axios from "axios";

// custom hook useRequest

export const useRequest = () => {

    const request = useCallback(async <T>(url:string):Promise<T | undefined> => {

        const $api  = axios.create({
            headers: {
                "TMG-Api-Key": "0J/RgNC40LLQtdGC0LjQutC4IQ=="
            }
        })

        try {
            const res = await $api.get(url)
            return res.data
        } catch (e) {
            console.log(e.message)
        }

    }, [])

    return {request}
}