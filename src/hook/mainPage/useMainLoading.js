import { useState, useEffect } from "react";

const useMainLoading = (initialLoadingState = true) => {
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  // 로딩 상태 제어 함수
  const startLoading = () => setIsLoading(true);
  const endLoading = () => setIsLoading(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      endLoading();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return {
    isLoading,
    startLoading,
    endLoading
  };
};

export default useMainLoading;
