import React from 'react';

import Home from "./Components/pages/Home";
import Header from "./Components/Header";

function App() {
    return (
        <div className="wrapper">
            <Header/>

            <div className="content">
                <Home/>
            </div>

        </div>
    );
}

export default App;
