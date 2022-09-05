import React from 'react';
import styles from './Manage.module.css'
import {Button} from './Buttons/Button';


export type ManagePropsType = {
    incrementCount: () => void
    cleanCount: () => void
    error: boolean
    count: number
    minCount: number
    errorSettings: string | null
    hint: string | null
    setActiveCounter: (activeCounter: boolean) => void
}
export const Manage = (props: ManagePropsType) => {

    let income = 'INC';
    let reset = 'reset';
    let set = 'set';
    const onClickIncomeHandler = () => {
        props.incrementCount();
    }
    const onClickResetHandler = () => {
        props.cleanCount();
    }

    const onClickSetHandler = () => {
        props.setActiveCounter(true);
    }

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={!!(props.error || props.errorSettings || props.hint)} name={income}
                    callBack={onClickIncomeHandler}/>
            <Button disabled={!!(props.errorSettings || props.hint)} name={reset}
                    callBack={onClickResetHandler}/>
            <Button disabled={!!(props.errorSettings || props.hint)} name={set}
                    callBack={onClickSetHandler}/>
        </div>
    );
};
