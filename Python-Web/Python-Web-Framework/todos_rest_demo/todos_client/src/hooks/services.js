import {createContext, useContext} from "react";
import HttpService from "../services/http";
import StorageService from "../services/storage";
import UrlsService  from '../services/urls';

const ServicesContext = createContext();

const useServices = () => useContext(ServicesContext);

const ServicesProvider = ({children, baseUrl}) => {
    const storageService = new StorageService();
    const httpService = new HttpService(storageService);
    const urlsService = new UrlsService(baseUrl);

    const value = {
        httpService,
        storageService,
        urlsService,
    };

    return (
        <ServicesContext.Provider value={value}>
            {children}
        </ServicesContext.Provider>
    );
}

export default ServicesProvider;

export {
    useServices,
};