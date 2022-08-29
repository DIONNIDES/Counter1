import React from 'react';
import styles from './Counter.module.css';
import {Display} from './Display/Display';
import {Manage} from './Manage/Manage';

export type CounterType = {
    count:number
    incrementCount:()=>void
    cleanCount:()=>void
    error:boolean
    MINCOUNT:number
}

export const Counter = (props:CounterType) => {
    return (
        <div className={styles.counter_wrapper}>
            <Display
                count={props.count}
                error={props.error}
            />
            <Manage  incrementCount = {props.incrementCount}
                     cleanCount={props.cleanCount}
                     error={props.error}
                     count={props.count}
                     MINCOUNT={props.MINCOUNT}
            />
        </div>
    );
};

