import React, { createContext, useContext, useEffect, useState } from 'react'
import {getInitialTheme} from '../../utils/theme/getInitailTheme'

export const stateContext = createContext();

const getFreshContext = () => {

    if (localStorage.getItem('context') === null) {
        localStorage.setItem('context', JSON.stringify({
            userId: 0,
            userName: '',
            theme: getInitialTheme(),
        }))
    }

    return JSON.parse(localStorage.getItem('context'))
}


export default function useStateContext() {

    const { context, setContext } = useContext(stateContext);
    return {
        context,
        setContext: obj => { setContext({ ...context, ...obj }) },
        resetContext: () => {
            localStorage.removeItem('context')
            setContext(getFreshContext())
        }
    }
}

export const ContextProvider = ({ children }) => {
    const [context, setContext] = useState(getFreshContext());


    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);
    }

    useEffect(() => {
        localStorage.setItem('context', JSON.stringify(context))
    }, [context])

    useEffect(() => {
        checkTheme(context.theme);
    }, [context.theme])


    return (
        <stateContext.Provider value={{ context, setContext }}>
            {children}
        </stateContext.Provider>
    )
}


