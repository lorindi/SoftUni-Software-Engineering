import { fetchUtil } from "../utils/http";

export class HttpService<T> {
  protected apiUrl: string;
  protected data = {} as T;
  protected dataCollection = [] as T[];

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  create(body: T) {
    const config = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    return fetchUtil<T>(this.apiUrl, config);
  }

  getAll() {
    return fetchUtil<T[]>(this.apiUrl) as Promise<T[]>;
  }

  getOne(id: number) {
    return fetchUtil<T>(`${this.apiUrl}/${id}`) as Promise<T>;
  }

  update<T extends { id: number }>(body: T) {
    const config = {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
    return fetchUtil<T>(`${this.apiUrl}/${body.id}`, config);
  }

  delete(id: number) {
    const config = { method: "DELETE" };
    return fetchUtil<T>(`${this.apiUrl}/${id}`, config);
  }
}
