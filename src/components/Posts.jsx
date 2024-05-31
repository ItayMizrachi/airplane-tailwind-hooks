import { useState } from "react";
import usePosts from "../hooks/usePosts";

const Posts = () => {
  const { posts, deletePost, loading, error, addPost, updatePost } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  const handleAddPost = async () => {
    if (title.trim() && body.trim()) {
      await addPost({ title, body });
      setTitle("");
      setBody("");
    }
  };

  const handleUpdatePost = async () => {
    if (editTitle.trim() && editBody.trim()) {
      await updatePost(editPostId, { title: editTitle, body: editBody });
      setEditPostId(null);
      setEditTitle("");
      setEditBody("");
    }
  };

  const startEditing = (post) => {
    setEditPostId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-lg font-bold mb-3">Add a New Post</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button
          onClick={handleAddPost}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Add Post
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md p-6 hover:bg-gray-50 transition duration-300"
          >
            {editPostId === post.id ? (
              <div>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="border p-2 w-full mb-2"
                />
                <textarea
                  value={editBody}
                  onChange={(e) => setEditBody(e.target.value)}
                  className="border p-2 w-full mb-2"
                />
                <button
                  onClick={handleUpdatePost}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditPostId(null)}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.body}</p>
                <button
                  onClick={() => startEditing(post)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
