import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage.js'

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeSetting')

    const body = document.querySelector('body')

    useEffect(() => {
        //check to see if darkmode is enabled
        //add dark-mode class to body if so and vice versa
        if (darkMode) body.classList.add('dark-mode')
        else body.classList.remove('dark-mode')
    }, [darkMode])

    return [darkMode, setDarkMode]
}
