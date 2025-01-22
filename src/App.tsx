import {JSX, useState} from "react";
import {CreateUser} from "./components/Users/CreateUser.tsx";
import {UserList} from "./components/Users/UserList.tsx";


export function App(): JSX.Element {

    const [userList, setUserList] = useState([]);

    const createUserHandler = (name: string, age: number) => {
        setUserList((prevUserList) => {
            return [...prevUserList, {name: name, age: age, id: Math.random().toString()}];
        });
    };

    return <>
        <CreateUser onCreateUser={createUserHandler}/>
        <UserList users={userList}/>
    </>;
}
