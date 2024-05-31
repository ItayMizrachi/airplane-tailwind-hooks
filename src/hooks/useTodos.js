import useFetch from "./useFetch";

const useTodos = () => {
  const url = `https://jsonplaceholder.typicode.com/todos?_limit=12`;
  const { data, error, loading } = useFetch(url);

  const todos = data || [];

  return { todos, error, loading };
};

export default useTodos;
