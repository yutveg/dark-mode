import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        //Check if key already exists in local storage
        //to determine what values to return
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        return initialValue
    })

    //setter function
    const setValue = value => {
        //setting storedValue = to value
        setStoredValue(value)
        //adding string value to key in local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setStoredValue]
}
