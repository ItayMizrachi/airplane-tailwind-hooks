import { useState, useEffect } from "react";
import axios from "axios";

const Axos = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/users")
      .then((response) => {
        // Extract and reorganize relevant data
        const formattedUsers = response.data.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
        }));
        // Set the reorganized data in state
        setUsers(formattedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            {/* Additional user information can be rendered here if needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Axos;
