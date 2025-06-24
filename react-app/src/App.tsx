import apiClient, { CanceledError } from "./services/api-client";
import React, { useEffect } from "react";
import { useState } from "react";
import UserService, { User } from "./services/user-service";

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = UserService.getAllUsers();
    request
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);

  const deleteUser = (user: User) => {
    const orginalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    const request = UserService.deleteUsers(user.id);
    request.catch((err) => {
      setError(err.message);
      setUsers(orginalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Amey" };
    const originalUser = [...users];
    setUsers([...users, newUser]);

    const request = UserService.addUser(newUser);
    request
      .then(({ data: savedUser }) => setUsers([...users, savedUser]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updtUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updtUser : u)));

    const request = UserService.updateuser(user.id, updtUser);
    request.catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

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
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
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



