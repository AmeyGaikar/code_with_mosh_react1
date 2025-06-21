import apiClient, {CanceledError} from "./services/api-client";
import React, { useEffect } from "react";
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    const orginalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    apiClient
      .delete("/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(orginalUsers);
      });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Amey" };
    const originalUser = [...users];
    setUsers([newUser, ...users]);

    apiClient
      .post("/users/", newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updtUser = {...user, name: user.name + '!'}
    setUsers(users.map(u => u.id === user.id ? updtUser : u));

    apiClient.patch("/users/" + user.id, updtUser)
    .catch( err => {
      setError(err.message);
      setUsers(originalUsers);
    } )
  }

  return (
    <>
      {error && <p className="text-danger"> {error} </p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button className="btn btn-outline-secondary mx-2" onClick={() => updateUser(user)}>Update</button>
              <button
                className="btn btn-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
