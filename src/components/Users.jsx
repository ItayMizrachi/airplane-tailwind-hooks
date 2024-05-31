import useUsers from "../hooks/useUsers";

const Users = () => {
  const { error, loading, users } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-[1260px] mx-auto">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.username}</p>
          <div className="text-sm text-gray-500">
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>
          <p className="text-gray-500">Phone: {user.phone}</p>
          <p className="text-gray-500">
            Website:{" "}
            <a
              target="_blank"
              href={`http://${user.website}`}
              className="text-blue-500 hover:text-blue-700"
            >
              {user.website}
            </a>
          </p>
          <div className="mt-4">
            <h4 className="font-semibold">Company:</h4>
            <p className="text-gray-600">{user.company.name}</p>
            <p className="text-gray-500">{user.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
