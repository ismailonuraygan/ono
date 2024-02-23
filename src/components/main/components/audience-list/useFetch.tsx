import axios from "axios";
import React, { useEffect, useState } from "react";

type TStatus = "passive" | "active";

interface IData {
  id: number;
  name: string;
  tags: string[];
  status: TStatus;
  createdAt: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://onox.cloud/backend/simple_audience.php"
      );
      if (response.data) setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setHasError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, hasError };
};

export default useFetch;
