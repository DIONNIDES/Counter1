import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter/Counter';
import {maxHeaderSize} from 'http';

function App() {

    const MAXCOUNT = 5;
    const MINCOUNT = 0;

    let [count, setCount] = useState<number>(MINCOUNT);
    let [error, setError] = useState<boolean>(false);


    const incrementCount = () => {
        const newCountValue = count+1;
        if (newCountValue===MAXCOUNT) setError(true);
        if(newCountValue <= MAXCOUNT )
        setCount(newCountValue);
        }

    const cleanCount = () => {
        setCount(MINCOUNT);
        setError(false);
    }

    return (
        <div className="App">
            <Counter
                count={count}
                incrementCount={incrementCount}
                cleanCount={cleanCount}
                error={error}
                MINCOUNT={MINCOUNT}
            />
        </div>
    );
}

export default App;
