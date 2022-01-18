import useLocalStorage from "./useLocalStorage";
const useDarkMode = (initialValues) =>{
    const [values, setValues] = useLocalStorage('darkmode', initialValues)

    return(
        [values, setValues]
    )
}

export default useDarkMode;