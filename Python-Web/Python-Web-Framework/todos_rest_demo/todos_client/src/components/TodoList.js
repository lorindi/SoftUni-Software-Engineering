import {useCallback, useEffect, useState} from "react";
import {Box, Button, Grid, Modal, Stack, Switch} from "@mui/material";
import {useTodos} from "../hooks/todos";
import {useCategories} from "../hooks/categories";
import TodoItem from "./TodoItem";

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


const TodosList = () => {
    const [filter, setFilter] = useState({});

    const [open, setOpen] = useState(false);
    const {
        todos,
        loadTodos,
        todoDetails,
        applyFilter,
        changeTodoState,
        loadTodoDetails,
    } = useTodos();

    const {
        categories,
        loadCategories,
    } = useCategories();

    const handleChangeCategory = useCallback((id) => {
        setFilter({
            ...filter, category: id,
        });
    }, [filter],)

    const handleShowTodoDetails = useCallback(
        async (id) => {
            setOpen(true);
            await loadTodoDetails(id);
        },
        [loadTodoDetails],
    );

    const handleStateChange = useCallback(
        async () => {
            await changeTodoState();
        },
        [changeTodoState],
    );

    const renderModalContent = useCallback(() => {
            const {
                title,
                description,
                is_done: isDone,
            } = todoDetails;

            return (
                <Box>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                    <Switch
                        checked={isDone} onChange={() => handleStateChange()}/>
                </Box>
            )
        },
        [handleStateChange, todoDetails],
    );

    useEffect(() => {
        (async () => {
            await loadTodos();
        })();
    }, [loadTodos]);

    useEffect(() => {
        (async () => {
            await loadCategories();
        })();
    }, [loadCategories],);

    useEffect(() => {
        (() => {
            applyFilter(filter);
        })();
    }, [applyFilter, filter],);

    return (
        <div>
            <Stack direction='row'>
                <Button onClick={() => handleChangeCategory('')}>All</Button>
                {categories.map(({name, id}) => (
                    <Button key={id} onClick={() => handleChangeCategory(id)}>{name}</Button>))}
            </Stack>
            <Grid container>
                {todos.map(todo => (<Grid item key={todo.id} xs={4}>
                    <TodoItem
                        todo={todo}
                        onShowDetails={(id) => handleShowTodoDetails(id)}
                    />
                </Grid>))}
            </Grid>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={modalStyle}>
                    {renderModalContent()}
                </Box>
            </Modal>
        </div>)
};

export default TodosList;