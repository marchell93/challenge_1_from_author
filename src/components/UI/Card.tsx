import styles from './Card.module.css';

export const Card = (props: any) => {
    return <div className={`${styles.card} ${props.className}`}>
        {props.children}
    </div>;
};