import { useState, useEffect } from 'react';
const useLoadingDelayHandler = (initialDelay, buttonDelay) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleButtonClick = (componentNumber) => {
    setIsLoading(true);

    // 특정 컴포넌트 번호(6번) 로딩을 표시하지 않도록 조건 추가
    if (componentNumber !== 6) {
      setTimeout(() => {
        setIsLoading(false);
        setCurrentComponent(componentNumber);
      }, buttonDelay);
    } else {
      setIsLoading(false);
      setCurrentComponent(componentNumber);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  return [isLoading, currentComponent, handleButtonClick];
};

export default useLoadingDelayHandler;