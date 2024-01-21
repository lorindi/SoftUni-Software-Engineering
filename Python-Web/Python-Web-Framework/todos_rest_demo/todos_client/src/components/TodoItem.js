import {Box, Button} from "@mui/material";
import styles from "./TodoItem.module.scss";

const TodoItem = ({todo, onShowDetails}) => {
    const {
        id, title,
    } = todo;

    return (<>
        <Box sx={{
            marginTop: 5, width: 150, textAlign: 'center',
        }}>
            <div className={styles.box}>
                <h3>{title}</h3>
                <Button
                    variant='text'
                    onClick={() => onShowDetails(id)}
                >Details</Button>
            </div>
        </Box>
    </>);
}

export default TodoItem;