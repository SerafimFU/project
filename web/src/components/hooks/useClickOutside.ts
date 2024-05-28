import { useEffect } from "react";

/* Функция обработки кликов */

export const useClickOutside = (ref: any, callback: any) => {
    const handlyClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handlyClick);
        return () => {
            document.removeEventListener("mousedown", handlyClick);
        }
    })
}