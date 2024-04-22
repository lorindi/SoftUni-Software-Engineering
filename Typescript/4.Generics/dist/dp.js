// Singleton Pattern - Anti pattern
// class Singleton {
//   private static instance: Singleton | null = null;
class API {
    fetchData() {
        return {
            data: {
                name: "Johnny",
                age: 25,
                social: {
                    email: "johnny25@gmail.com",
                },
            },
        };
    }
}
class Converter {
    apiData;
    constructor(apiData) {
        this.apiData = apiData;
    }
    get name() {
        return this.apiData.fetchData().data.name;
    }
    get age() {
        return this.apiData.fetchData().data.age;
    }
    get email() {
        return this.apiData.fetchData().data.social.email;
    }
}
// Client
function displayData({ name, age, email }) {
    console.log({ name, age, email });
}
const api = new API();
const adaptedData = new Converter(api);
displayData(adaptedData);
//# sourceMappingURL=dp.js.map