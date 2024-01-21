import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

class HttpService {
    defaultHeaders = {
        'Content-Type': 'application/json',
        'X-CSRFToken': cookies.get('csrftoken'),
    }

    constructor(storageService) {
        this.storageService = storageService;
    }

    get defaultOptions() {
        const token = this.storageService.get('token')
        const authorizationToken = token
            ? {'Authorization': `Token ${token}`}
            : {};

        return {
            headers: {
                ...this.defaultHeaders,
                ...authorizationToken,
            },
        };
    }

    async request(method, url, body, query) {
        const bodyOptions = body
            ? {body: JSON.stringify(body)}
            : {};
        const options = {
            ...this.defaultOptions,
            method: method,
            ...bodyOptions,
        };

        const queryParams = query
            ? Object.keys(query)
                .filter(key => query[key])
                .map(key => `${key}=${query[key]}`)
                .join('&')
            : '';

        const queryString = queryParams
            ? `?${queryParams}`
            : '';

        const response = await fetch(`${url}${queryString}`, options);

        return await response.json();
    }

    async get(url, query) {
        return this.request('get', url, null, query);
    }

    async post(url, body) {
        return this.request('post', url, body);
    }

    async put(url, body) {
        return this.request('put', url, body);
    }
}

export default HttpService;