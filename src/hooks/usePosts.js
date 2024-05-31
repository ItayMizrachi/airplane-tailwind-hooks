import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  let url = "https://jsonplaceholder.typicode.com/posts";
  const { data, loading, error } = useFetch(`${url}?_limit=12`);

  useEffect(() => {
    setPosts(data || []);
  }, [data]);

  const addPost = async (newPost) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });
    const post = await response.json();
    setPosts([post, ...posts]);
  };

  const updatePost = async (id, updatedPost) => {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    });
    const post = await response.json();
    setPosts(posts.map((p) => (p.id === id ? post : p)));
  };

  const deletePost = async (id) => {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    setPosts(posts.filter((post) => post.id !== id));
  };

  return { posts, setPosts, loading, error, addPost, updatePost, deletePost };
};

export default usePosts;
