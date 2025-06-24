import apiClient from "./api-client";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  deleteUsers(id: number) {
    const request = apiClient.delete("/users/" + id);
    return request;
  }

  addUser(newUser: object) {
    const request = apiClient.post("/users", newUser);
    return request;
  }

  updateuser(id: number, updtUser: object) {
  const request = apiClient.patch("/users/" + id, updtUser);
  return request;
  }
}

export default new UserService();
