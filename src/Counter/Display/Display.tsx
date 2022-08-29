import React, {useState} from 'react';
import styles from './Display.module.css';

export type DisplayPropsType = {
    count:number
    error:boolean
}


export const Display = (props:DisplayPropsType) => {


    return (
        <div className={props.error ? styles.error_display : styles.display_wrapper}>
            {props.count<=5 ? props.count : 5 }
        </div>
    );
};
