import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";

export default function DarkModeToggle() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  ); // 초기 다크 모드 상태를 설정

  // 다크 모드를 토글하는 함수 정의
  const toggleDarkMode = (enabled) => {
    setTheme(colorTheme); // useDarkMode로부터 가져온 색상 테마 설정
    setDarkMode(enabled); // 다크 모드 상태를 설정
  };


  // 다크 모드 스위치 컴포넌트를 렌더링
  return (
    <DarkModeSwitch
      className="mr-5 mt-2"
      checked={darkMode}
      onChange={toggleDarkMode}
      size={30}
    />
  );
}
