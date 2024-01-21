import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {useServices} from "./services";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children, initialIsLoggedIn}) => {
    const [isLoggedIn, setLoggedIn] = useState(initialIsLoggedIn);
    const {
        httpService,
        storageService,
        urlsService,
    } = useServices();

    const login = useCallback(
        async (username, password) => {
            const credentials = {username, password};
            const {token} = await httpService.post(urlsService.getLoginUrl(), credentials);
            storageService.set('token', token);
            setLoggedIn(true);
        },
        [httpService, storageService, urlsService],
    );

    const register = useCallback(
        async (username, password) => {
            const credentials = {username, password};
            await httpService.post(urlsService.getRegisterUrl(), credentials);
            // await login(username, password);
        },
        [httpService, urlsService],
    );

    const logout = useCallback(
        async () => {
            await httpService.post(urlsService.getLogoutUrl());
            storageService.clear('token');
            window.location = '/';
        },
        [httpService, storageService, urlsService],
    );

    const value = {
        isLoggedIn,
        login,
        register,
        logout,
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

export {
    useAuth,
}

export default AuthProvider;