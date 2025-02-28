import { useState } from "react";
import { FaTrash, FaUserPlus } from "react-icons/fa";

const Users = () => {
  const [users, setUsers] = useState(["John Doe", "Jane Doe", "Alice", "Bob"]);

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <div className="bg-white p-4 rounded-lg shadow">
        <ul>
          {users.map((user, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              {user}
              <button onClick={() => deleteUser(index)} className="text-red-500">
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;