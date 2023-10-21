import { useState, useEffect } from 'react';

const useLoadingDelayHandler = (initialDelay, buttonDelay) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentComponent, setCurrentComponent] = useState(1);

  const handleButtonClick = (componentNumber) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentComponent(componentNumber);
    }, buttonDelay);
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
