import React from 'react';
import styles from './Manage.module.css'
import {Button} from './Buttons/Button';


export type ManagePropsType = {
    incrementCount:()=>void
    cleanCount:()=>void
    error:boolean
    count:number
    MINCOUNT:number
}
export const Manage = (props:ManagePropsType) => {

    let income = 'INC';
    let reset = 'reset';
    const onClickIncomeHandler = () =>{
        props.incrementCount();
    }
    const onClickResetHandler = () =>{
        props.cleanCount();
    }

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={props.error }  name={income} callBack={onClickIncomeHandler}/>
            <Button disabled={props.count===props.MINCOUNT } name={reset} callBack={onClickResetHandler}/>
        </div>
    );
};
