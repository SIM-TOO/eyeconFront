
import { useState, useEffect } from "react";
 

// useDarkMode hook
export default function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme); // 로컬 스토리지에서 현재 테마를 가져와 상태로 관리
    const colorTheme = theme === "dark" ? "light" : "dark";
 
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme); 
        localStorage.setItem('theme', theme); // 로컬 스토리지에 현재 테마를 저장합니다.
    }, [theme, colorTheme]);
 
    return [colorTheme, setTheme]
}