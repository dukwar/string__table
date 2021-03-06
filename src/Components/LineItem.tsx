import React from "react";
import {useCountLine} from "../hooks/useCountLine.hook";
import {LineItemType} from "./types";


const LineItem = React.memo(({line, position}:LineItemType) => {

    const {getCountWord, getCountVowels} = useCountLine()
    const wordCount = getCountWord(line)
    const vowelsCount = getCountVowels(line)

    return (
        <tr>
            <td><p>{position}</p></td>
            <td><p>{line}</p></td>
            <td><p>{wordCount}</p></td>
            <td><p>{vowelsCount}</p></td>
        </tr>
    )
})

export default LineItem