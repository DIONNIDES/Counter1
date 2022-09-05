import React from 'react';
import styles from './DisplaySettings.module.css';

export type DisplayPropsType = {
    maxCount: number
    minCount: number
    updateMinCountValue: (value: number) => void
    updateMaxCountValue: (value: number) => void
    errorSettings: string | null
}


export const DisplaySettings = (props: DisplayPropsType) => {

    const onMaxCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updateMaxCountValue(Number(e.currentTarget.value))
    }

    const onMinCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.updateMinCountValue(Number(e.currentTarget.value))
    }

    let finalClassName = props.errorSettings ? styles.error_input : ''

    return (
        <div className={styles.display_wrapper}>
            <div className={styles.display_field}>
                <p>max value: </p>  <input value={props.maxCount} onChange={onMaxCountChange} type={'number'}
                                           className={finalClassName}/>
            </div>
            <div className={styles.display_field}>
                <p>min value: </p>  <input value={props.minCount} onChange={onMinCountChange} type={'number'}
                                           className={finalClassName}/>
            </div>
        </div>
    );
};
