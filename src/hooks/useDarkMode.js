import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage(false)

    console.log(value)

    const checkDarkMode = () => {
        if(value === false){
            setValue(true)
        } else if (value === true) {
            setValue(false)
        }
    }

    useEffect(() => {
        const webApp = document.body
        if(value === false) {
            return webApp.classList.remove('dark-mode')
        } else {
            return webApp.classList.add('dark-mode')
        }
    }, [value])


    return [value, checkDarkMode, setValue]
}

export default useDarkMode