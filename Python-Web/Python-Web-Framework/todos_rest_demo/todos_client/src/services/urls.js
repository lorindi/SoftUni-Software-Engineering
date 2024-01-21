class UrlsService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getCategoriesListUrl() {
        return `${this.baseUrl}/api/todos/categories/`;
    }

    getTodosListUrl() {
        return `${this.baseUrl}/api/todos/`;
    }

    getTodoDetailsUrl(id) {
        return `${this.baseUrl}/api/todos/${id}/`;
    }

    getTodoUpdateUrl(id) {
        return `${this.baseUrl}/api/todos/${id}/`;
    }

    getTodoCreateUrl() {
        return `${this.baseUrl}/api/todos/`;
    }

    getLoginUrl() {
        return `${this.baseUrl}/api/auth/login/`;
    }

    getRegisterUrl() {
        return `${this.baseUrl}/api/auth/register/`;
    }

    getLogoutUrl() {
        return `${this.baseUrl}/api/auth/logout/`;
    }
}

export default UrlsService;