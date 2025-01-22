import {JSX, useState} from "react";
import {Card} from "../UI/Card.tsx";
import styles from "./CreateUser.module.css";
import {Button} from "../UI/Button.tsx";
import {ErrorModal} from "../UI/ErrorModal.tsx";

export const CreateUser = (props: any): JSX.Element => {

    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [error, setError] = useState();

    const createUserHandler = (event: Event): void => {
        event.preventDefault();

        if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
            setError({
                title: 'Некорректный ввод',
                message: 'Эти поля должны быть заполнены'
            });
            return;
        }

        if (+inputAge < 1) {
            setError({
                title: 'Некорректный возраст',
                message: 'Возраст должен больше 0'
            });
            return;
        }

        props.onCreateUser(inputName, inputAge);
        setInputName('');
        setInputAge('');
    };

    const nameChangeHandler = (event) => {
        setInputName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setInputAge(event.target.value);
    };

    const errorHandler = () => {
        setError(false);
    };

    return (
        <div>
            {error && <ErrorModal onCloseModal={errorHandler} title={error.title} message={error.message}/>}
            <Card className={styles.input}>
                <form onSubmit={createUserHandler}>
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" onChange={nameChangeHandler} value={inputName}/>
                    <label htmlFor="age">Возраст</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={inputAge}/>
                    <Button type="submit">Добавить пользователя</Button>
                </form>
            </Card>
        </div>
    );
};