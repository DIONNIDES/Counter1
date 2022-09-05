import React from 'react';
import styles from './Counter.module.css';
import {Display} from './Display/Display';
import {Manage} from './Manage/Manage';

export type CounterType = {
    count: number
    incrementCount: () => void
    cleanCount: () => void
    error: boolean
    errorSettings: string | null
    hint: string | null
    minCount: number
    maxCount: number
}

export const Counter = (props: CounterType) => {
    return (
        <div className={styles.counter_wrapper}>
            <Display
                count={props.count}
                error={props.error}
                maxCount={props.maxCount}
                errorSettings={props.errorSettings}
                hint={props.hint}
            />
            <Manage incrementCount={props.incrementCount}
                    cleanCount={props.cleanCount}
                    error={props.error}
                    errorSettings={props.errorSettings}
                    count={props.count}
                    minCount={props.minCount}
                    hint={props.hint}
            />
        </div>
    );
};

