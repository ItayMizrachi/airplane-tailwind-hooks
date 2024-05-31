import useTodos from "../hooks/useTodos";

const Todos = () => {
  const { todos, loading, error } = useTodos();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Todos</h2>
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`bg-white p-4 rounded-lg shadow ${
              todo.completed ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-800">
                {todo.title}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  todo.completed
                    ? "text-green-800 bg-green-200"
                    : "text-red-800 bg-red-200"
                }`}
              >
                {todo.completed ? "Completed" : "Pending"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
