import React from 'react'
import { createContext, ReactNode, useContext, useState } from 'react'

type DataContext = {
    toogleCard: boolean
    toogleDarkTheme: boolean
    setToogleDarkTheme: (toogle: boolean) => void
    setToogleCard: (toogle: boolean) => void
}

export const GlobalContext = createContext({} as DataContext)

type GlobalContextProviderProps = {
    children: ReactNode
}

export function GlobalContextProvider({children}: GlobalContextProviderProps){
    const [toogleCard, setToogleCard] = useState(false)
    const [toogleDarkTheme, setToogleDarkTheme] = useState(true)

    return (
        <GlobalContext.Provider value={{ toogleCard, toogleDarkTheme, setToogleDarkTheme, setToogleCard }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(GlobalContext)
}