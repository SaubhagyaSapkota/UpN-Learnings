import { useEffect, useState } from "react";

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string;
}

export function useFetch<T = unknown>(
  url: string,
  options?: RequestInit,
  immediate: boolean = true
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [trigger, setTrigger] = useState(0);

  const refetch = () => setTrigger((prev) => prev + 1);

  useEffect(() => {
    if (!immediate && trigger === 0) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");
      setData(null);

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Fetch failed");
        const json = await response.json();
        setData(json);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options, trigger]);

  return { data, loading, error, refetch };
}
