import React from 'react';
import styles from './DisplaySettings.module.css';
import {SuperInput} from './SuperInput/SuperInput';

export type DisplayPropsType = {
    maxCount: number
    minCount: number
    updateMinCountValue: (value: number) => void
    updateMaxCountValue: (value: number) => void
    errorSettings: string | null
}


export const DisplaySettings = (props: DisplayPropsType) => {

    const onMaxCountChange = (value: number) => {
        props.updateMaxCountValue(value)
    }

    const onMinCountChange = (value: number) => {
        props.updateMaxCountValue(value)
    }

    let finalClassName = props.errorSettings ? styles.error_input : ''

    return (
        <div className={styles.display_wrapper}>
            <SuperInput countLimit={props.maxCount} callback={(value: number) => onMaxCountChange(value)}
                        finalClassName={finalClassName}/>
            <SuperInput countLimit={props.minCount} callback={(value: number) => onMinCountChange(value)}
                        finalClassName={finalClassName}/>
        </div>
    );
};

