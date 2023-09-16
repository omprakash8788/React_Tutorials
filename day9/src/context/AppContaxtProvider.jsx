import { createContext, useState } from 'react'
// create the context -1
export const AppContext = createContext()
//AppContext.Provider
// c-p-c
function AppContextProvider(props){
    const [theme, setTheme]= useState("light")

    const toggleTheme=()=>{
        setTheme(theme ==="light" ? "dark" : "light")
    }
    return(
        <AppContext.Provider value={{theme,toggleTheme
        }}>
          {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;

