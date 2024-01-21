import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TodosProvider from "./hooks/todos";
import AppNav from "./layout/AppNav";
import ServicesProvider from "./hooks/services";
import AuthProvider from "./hooks/auth";
import RegisterPage from "./pages/RegisterPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import StorageService from "./services/storage";
import CategoriesProvider from "./hooks/categories";

const baseUrl = 'http://localhost:8000';

const App = () => {
    const storageService = new StorageService();

    return (
        <ServicesProvider baseUrl={baseUrl}>
            <AuthProvider initialIsLoggedIn={!!storageService.get('token')}>
                <TodosProvider>
                    <CategoriesProvider>
                        <div className="App">
                            <header className="App-header">
                                <BrowserRouter>
                                    <Routes>
                                        <Route path="/" element={<IndexPage/>}/>
                                        <Route path="/register" element={<RegisterPage/>}/>
                                        <Route path="/login" element={<LoginPage/>}/>
                                        <Route
                                            path="*"
                                            element={
                                                <main style={{padding: "1rem"}}>
                                                    <p>There's nothing here!</p>
                                                </main>
                                            }
                                        />
                                    </Routes>
                                </BrowserRouter>
                            </header>
                        </div>
                    </CategoriesProvider>
                </TodosProvider>
            </AuthProvider>
        </ServicesProvider>
    );
};

export default App;
