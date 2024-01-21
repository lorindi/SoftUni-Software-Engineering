import TodoList from "../components/TodoList";
import {makePrivate} from "./base/PrivatePage";
import {withLayout} from "./base/LayoutPage";
import styles from './IndexPage.module.scss';
import AddTodo from "../components/AddTodo";

const IndexPage = () => {
    return (
        <div className={styles.container}>
            <h2>Your todos!</h2>
            <AddTodo/>
            <TodoList/>
        </div>
    );
};

export default makePrivate(withLayout(IndexPage));