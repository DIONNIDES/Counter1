import React from 'react';
import styles from './ManageSettings.module.css';
import {Button} from '../Counter/Manage/Buttons/Button';


export type ManagePropsType = {
    errorSettings: string | null
    setToLocalStorage: () => void

    setActiveCounter: (activeCounter: boolean) => void

}
export const ManageSettings = (props: ManagePropsType) => {


    const onClickSetHandler = () => {
        props.setToLocalStorage();
        props.setActiveCounter(false);
    }

    return (
        <div className={styles.manage_wrapper}>
            <Button disabled={!!(props.errorSettings)} name={'set'} callBack={onClickSetHandler}/>
        </div>
    );
};
