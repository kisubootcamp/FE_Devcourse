import { useState, useEffect } from "react";

interface FetchResponse<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // 로딩 시작
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: T = await response.json();
        setData(result); // 데이터 저장
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // 에러 처리
        }
      } finally {
        setIsLoading(false); // 로딩 종료
      }
    };

    fetchData();
  }, [url]); // URL이 변경될 때마다 다시 호출

  return { data, error, isLoading };
};

export default useFetch;
