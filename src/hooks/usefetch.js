import { useEffect, useState } from "react";
import { fetchData } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Oops, Something went wrong!");
      });
  }, [url]);
  // whwnever URL changes api triggered

  return { data, loading, error };
};

export default useFetch;
