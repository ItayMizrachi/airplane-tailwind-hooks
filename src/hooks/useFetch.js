import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios({
          method: method,
          url: url,
          data: body,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url, method, body]); // Dependencies array includes method and body to handle updates

  return { data, loading, error };
};

export default useFetch;
