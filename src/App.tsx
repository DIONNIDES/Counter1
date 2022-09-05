import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter/Counter';
import {CounterSettings} from './CounterSettings/CounterSettings';

function App() {

    const MAXCOUNT = 10;
    const MINCOUNT = 0;

    useEffect(() => {
            let minCountValueAsString = localStorage.getItem('minCount');
            let maxCountValueAsString = localStorage.getItem('maxCount');

            if (minCountValueAsString && maxCountValueAsString) {
                minCount = JSON.parse(minCountValueAsString);
                maxCount = JSON.parse(maxCountValueAsString);
                setMinCount(minCount);
                setMaxCount(maxCount);
            }
        }, []
    );

    let [minCount, setMinCount] = useState(0);
    let [maxCount, setMaxCount] = useState(0);

    let [count, setCount] = useState<number>(minCount);
    let [error, setError] = useState<boolean>(false);
    let [errorSettings, setErrorSettings] = useState<string | null>('');
    let [hint, setHint] = useState<string | null>('')


    const setToLocalStorage = () => {

        if (minCount < MINCOUNT || minCount > MAXCOUNT || minCount >= maxCount) {
            setError(true);
        } else if (maxCount < MINCOUNT || maxCount > MAXCOUNT && maxCount <= minCount) {
            setError(true)
        } else {
            localStorage.setItem('minCount', JSON.stringify(minCount));
            localStorage.setItem('maxCount', JSON.stringify(maxCount))
            setCount(minCount);
            setError(false);
            setHint('');
        }


    }


    const updateMinCountValue = (value: number) => {

        if (MAXCOUNT < value || value < MINCOUNT || value >= maxCount || maxCount > MAXCOUNT || maxCount < MINCOUNT) {
            setMinCount(value);
            setErrorSettings('value is incorrect!');
        } else {
            setMinCount(value);
            setCount(value)
            setErrorSettings('');
            setError(false);
            setHint('enter values and press set');
        }

    }

    const updateMaxCountValue = (value: number) => {
        if (MAXCOUNT < value || value < MINCOUNT || value <= minCount || minCount > MAXCOUNT || minCount < MINCOUNT) {
            setMaxCount(value);
            setErrorSettings('value is incorrect!');
        } else {
            setMaxCount(value);
            setCount(minCount)
            setErrorSettings('');
            setError(false)
            setHint('enter values and press set');
        }
    }


    const incrementCount = () => {
        const newCountValue = count + 1;
        if (newCountValue === maxCount) setError(true);
        if (newCountValue <= maxCount)
            setCount(newCountValue);
    }

    const cleanCount = () => {
        setCount(minCount);
        setError(false);
    }

    return (
        <div className="App">
            <CounterSettings
                maxCount={maxCount}
                minCount={minCount}
                errorSettings={errorSettings}
                setToLocalStorage={setToLocalStorage}
                updateMinCountValue={updateMinCountValue}
                updateMaxCountValue={updateMaxCountValue}
            />
            <Counter
                count={count}
                incrementCount={incrementCount}
                cleanCount={cleanCount}
                error={error}
                errorSettings={errorSettings}
                hint={hint}
                minCount={minCount}
                maxCount={maxCount}

            />
        </div>


    );
}

export default App;
