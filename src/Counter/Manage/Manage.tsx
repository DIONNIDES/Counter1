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
}
export const Manage = (props: ManagePropsType) => {

    let income = 'INC';
    let reset = 'reset';
    const onClickIncomeHandler = () => {
        props.incrementCount();
    }
    const onClickResetHandler = () => {
        props.cleanCount();
    }

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={props.error || props.errorSettings || props.hint ? true : false} name={income}
                    callBack={onClickIncomeHandler}/>
            <Button disabled={props.errorSettings || props.hint ? true : false} name={reset}
                    callBack={onClickResetHandler}/>
        </div>
    );
};
