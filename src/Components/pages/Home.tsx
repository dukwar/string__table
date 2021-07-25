import React from "react";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";
import LineItem from "../LineItem";


function Home() {

    const lines = useTypesSelector(({line}) => line.lines)

    return (
        <section className="container">
            {lines.length > 0 &&
            <table>
                <thead>
                <tr>
                    <th><p>#</p></th>
                    <th><p>Текст</p></th>
                    <th><p>Количество слов</p></th>
                    <th><p>Количество гласных</p></th>
                </tr>
                </thead>

                <tbody>
                {lines.map(({text}, index) => <LineItem key={`line-${index}`} line={text} position={index + 1}/>)}
                </tbody>
            </table>
            }

        </section>

    )
}

export default Home