import { createContext, useContext, useEffect, useCallback } from "react";
import { useSessionStorage } from "../hooks/useStorage";
import { useEventListener } from "../hooks/useEventListener";

const ThemeContext = createContext()
const ThemeUpdateContext = createContext()

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)


export const ThemeProvider = ({ children }) => {
    const theme = useSessionStorage('theme', () => {
        const getTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
        return getTheme;
    })

    const listener = useCallback((e) => {
        const colorScheme = e.matches ? 'dark' : 'light'
        theme[1](colorScheme)
    }, [])

    useEffect(() => {
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', listener)

        return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', listener)
    }, [])

    useEventListener('storage', (e) => {
        if (e.key == 'theme') {
            console.log(e);
        }
    })

    return (
    <ThemeContext.Provider value={theme}>
        <ThemeUpdateContext.Provider value={[theme[1], theme[2]]}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>)
}