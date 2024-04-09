const API_URL: string = "https://jsonplaceholder.typicode.com/users";

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const getUsers = (): void => {
  fetch(API_URL, { method: "GET" })
    .then((res) => res.json())
    .then((users: User[]) => {
      users.forEach((user) => {
        console.log(user.username + " ->  " + user.company.name);
      });
    })
    .catch((err) => console.log(`Err: ${err}`));
};

getUsers();
