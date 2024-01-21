class StorageService {
    storage = localStorage;

    set(key, value) {
        const obj = {
            value,
        };
        this.storage.setItem(key, JSON.stringify(obj));
    }

    get(key) {
        const {value} = JSON.parse(this.storage.getItem(key) || '{}');
        return value;
    }

    clear(key) {
        this.storage.removeItem(key)
    }
}

export default StorageService;