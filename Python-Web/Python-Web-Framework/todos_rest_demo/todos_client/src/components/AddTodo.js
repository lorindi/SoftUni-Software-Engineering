import {useEffect, useState} from "react";
import {Box, Button, FormControl, MenuItem, Modal, Select, TextField} from "@mui/material";
import {useTodos} from "../hooks/todos";
import {useCategories} from "../hooks/categories";
import styles from "./AddTodo.module.scss";

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddTodo = () => {
    const [isOpen, setOpen] = useState(false);

    const [todo, setTodo] = useState({});

    const {
        categories,
        loadCategories,
    } = useCategories();

    const {
        createTodo,
    } = useTodos();

    const changeTodoValue = (key, value) => {
        const newTodo = {
            ...todo,
            [key]: value,
        };
        setTodo(newTodo);
    };

    const handleOnSave = async () => {
        await createTodo(todo);
        setOpen(false);
    };

    useEffect(
        () => {
            (async () => {
                await loadCategories();
            })();
        },
        [loadCategories],
    );

    return (
        <>
            <Button
                variant='contained'
                onClick={() => setOpen(true)}
            >
                Add Todo
            </Button>
            <Modal open={isOpen} onClose={() => setOpen(false)}>
                <Box sx={modalStyle}>
                    <h3>Add todo</h3>
                    <FormControl fullWidth margin='normal'>
                        <TextField
                            label="Enter title"
                            variant="standard"
                            className={styles.formControl}
                            onChange={(ev) => changeTodoValue('title', ev.target.value)}/>
                    </FormControl>

                    <FormControl fullWidth margin='normal'>
                        <TextField
                            label="Enter description"
                            variant="standard"
                            className={styles.formControl}
                            onChange={(ev) => changeTodoValue('description', ev.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={todo.category || ''}
                            label="Category"
                            onChange={(ev) => changeTodoValue('category', ev.target.value)}
                        >
                            {
                                categories.map(({id, name}) => (
                                    <MenuItem key={id} value={id}>{name}</MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl fullWidth margin='normal'>
                        <Button
                            variant='text'
                            onClick={() => handleOnSave()}>
                            Save
                        </Button>
                    </FormControl>
                </Box>
            </Modal>
        </>)
};

export default AddTodo;