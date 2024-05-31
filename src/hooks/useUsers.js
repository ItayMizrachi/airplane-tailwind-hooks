import useFetch from "./useFetch";

const useUsers = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { data, error, loading } = useFetch(url);

  const users = data || [];

  return { users, error, loading };
};

export default useUsers;
