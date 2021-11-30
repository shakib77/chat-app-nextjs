import {createContext, useState} from "react";

export const Context = createContext('')

export const ContextProvider = (props: any) => {
    const [userName, setUserName] = useState('')
    const [secret, setSecret] = useState('')

    const value: any = {
        userName, setUserName, secret, setSecret
    }

    return (
        <Context.Provider value={value}>{props.children}</Context.Provider>
    )
}
