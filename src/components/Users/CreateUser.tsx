import {JSX} from "react";

export const CreateUser= (props: any): JSX.Element => {

    const createUserHandler = (event: Event): void => {
        event.preventDefault();
    }

    return (
        <form onSubmit={createUserHandler}>
            <label htmlFor="name">Имя</label>
            <input id="name" type="text"/>
            <label htmlFor="age">Возраст</label>
            <input id="age" type="number"/>
            <button type="submit">Добавить пользователя</button>
        </form>
    )
}