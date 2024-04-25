import { Address, Company } from "./common";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
};

export type UserDetails = {
  address: Address;
  phone: string;
  company: Company;
} & User;
