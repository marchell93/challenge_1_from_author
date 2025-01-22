import styles from "./Button.module.css";
import {JSX} from "react";

export const Button = (props: any): JSX.Element => {
    return <button className={styles.button} type={props.type || 'button'} onClick={props.onClick}>
        {props.children}
    </button>;
};