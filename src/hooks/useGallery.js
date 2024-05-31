import useFetch from "./useFetch";

const useGallery = () => {
  const url = "https://jsonplaceholder.typicode.com/photos?_limit=20";
  const { data, error, loading } = useFetch(url);

  const gallery = data || [];
  return { gallery, loading, error };
};

export default useGallery;
