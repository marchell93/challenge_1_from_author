import {Card} from "../UI/Card.tsx";
import styles from "./UserList.module.css";

interface UserList {
    name: string;
    age: number;
    id: string;
}

export const UserList = (props: any) => {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user: UserList) => (
                    <li key={user.id}>{user.name} - {user.age} лет</li>
                ))}
            </ul>
        </Card>
    );
};