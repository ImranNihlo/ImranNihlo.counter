import React from 'react';
import {useState} from "react";


function Main(props) {

    const [counter, setCounter] = useState(0);

    function plus() {
        setCounter(counter + 2)
    }

    function minus() {
        if (counter < 1) {
            return 0
        } else {
            setCounter(counter - 2)
        }
    }

    function reset() {
        setCounter(0)
    }

    return (
        <div className="main">
            <div className="number">
                {counter}
            </div>
            <div className="buttons">
                <button onClick={plus} className="blue">Увеличить</button>
                <button onClick={minus} className="orange">Уменьшить</button>
                <button onClick={reset} className="gray">Сбросить</button>
            </div>
        </div>
    );
}

export default Main;