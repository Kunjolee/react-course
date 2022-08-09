import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);

        let resData = await res.json();

        if (!res.ok) {
          throw new Error({
            error: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          });
        }

        setData(resData);

        setError({
          error: false,
          status: res.status,
          statusText: !res.statusText ? "Todo salio bien!" : res.statusText,
        });

        setIsPending(false);
      } catch (error) {
        setError(error);
        setIsPending(true);
      }
    };

    getData(url);
  }, [url]);
  return { data, isPending, error };
};
