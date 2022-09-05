import React from 'react';
import styles from './Display.module.css';

export type DisplayPropsType = {
    count: number
    error: boolean
    errorSettings: string | null
    hint: string | null
    maxCount: number
}


export const Display = (props: DisplayPropsType) => {


    return (
        <div className={props.error || props.errorSettings ? styles.error_display : styles.display_wrapper}>

            {
                props.errorSettings
                    ? <div className={styles.error_message}>{props.errorSettings}</div>
                    : props.hint ? <div
                        className={styles.error_message}>{props.hint}</div> : props.count <= props.maxCount ? props.count : props.maxCount
            }
        </div>
    );
};
