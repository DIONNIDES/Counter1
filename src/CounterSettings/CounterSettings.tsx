import React from 'react';
import styles from './../Counter/Counter.module.css'
import {ManageSettings} from './ManageSettings';
import {DisplaySettings} from './DisplaySettings';

export type CounterType = {
    maxCount: number
    minCount: number
    errorSettings: string | null
    setToLocalStorage: () => void
    updateMinCountValue: (value: number) => void
    updateMaxCountValue: (value: number) => void
    setActiveCounter:(activeCounter:boolean)=>void
}

export const CounterSettings = (props: CounterType) => {

    return (
        <div className={styles.counter_wrapper}>
            <DisplaySettings
                maxCount={props.maxCount}
                minCount={props.minCount}
                updateMinCountValue={props.updateMinCountValue}
                updateMaxCountValue={props.updateMaxCountValue}
                errorSettings={props.errorSettings}
            />
            <ManageSettings
                errorSettings={props.errorSettings}
                setToLocalStorage={props.setToLocalStorage}
                setActiveCounter={props.setActiveCounter}
            />
        </div>
    );
};