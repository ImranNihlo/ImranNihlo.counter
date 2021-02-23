import React from 'react';
import Header from "./Header";
import "./style.css"
import Main from "./Main";
import Footer from "./Footer";

function App(props) {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;