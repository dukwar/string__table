import React from "react";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import LineItem from "../LineItem";


function Home() {

    const lines = useTypesSelector(({line}) => line.lines)


    return (
        <section className="container">
            <table>
                <tr>
                    <th><p>#</p></th>
                    <th><p>Текст</p></th>
                    <th><p>Количество слов</p></th>
                    <th><p>Количество гласных</p></th>
                </tr>
                {lines.map(({text}, index) => <LineItem line={text} position={index + 1} />)}
            </table>
        </section>

    )
}

export default Home