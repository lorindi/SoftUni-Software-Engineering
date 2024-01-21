import {useCallback, useState} from "react";
import {useAuth} from "../hooks/auth";
import {Button, TextField} from "@mui/material";
import {Navigate} from 'react-router-dom';
import {withLayout} from "./base/LayoutPage";
import styles from "./LoginPage.module.scss";

const RegisterPage = () => {
    const [isSuccessful, setSuccessful] = useState(false);
    const [username, setUsername] = useState(`doncho-${Math.random()}`);
    console.log(username);
    const [password, setPassword] = useState('doncho');
    const {
        register,
    } = useAuth();

    const handleClick = useCallback(
        async () => {
            await register(username, password);
            setSuccessful(true);
        },
        [register, password, username]
    );

    if (isSuccessful) {
        return (
            <Navigate to='/login'/>
        );
    }

    return (
        <div className={styles.container}>
            <h2>Register</h2>
            <form onSubmit={() => handleClick()}>
                <div className={styles.row}>
                    <TextField
                        label="Enter username"
                        variant="standard"
                        className={styles.formControl}
                        value={username}
                        onChange={(ev) => setUsername(ev.target.value)}/>
                </div>
                <div className={styles.row}>
                    <TextField
                        label="Enter password"
                        variant="standard"
                        type="password"
                        className={styles.formControl}
                        value={password}
                        onChange={(ev) => setPassword(ev.target.value)}/>
                </div>

                <div className={styles.row}>
                    <Button
                        variant="contained"
                        onClick={() => handleClick()}>
                        Register
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default withLayout(RegisterPage);