import React from 'react'
import { IconButton } from '../components'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useStateTheme } from '../store/hooks/useStateContext'

const Header = () => {
    const { theme, setTheme } = useStateTheme();

    const chengeTheme = () => {
        setTheme({
            theme: theme.theme === 'dark' ? 'light' : 'dark'
        })
    }

    return (
        <header className='container'>
            <nav className=''>
                <a className='' href="/"><span className=''>DEV</span> Log</a>
            </nav>

            <div className=''>
                {
                    theme.theme === 'light'
                        ?
                        <span onClick={chengeTheme}>
                            <IconButton value={<BsSunFill />} />
                        </span>
                        :
                        <span onClick={chengeTheme}>
                            <IconButton value={<BsMoonFill />} />
                        </span>
                }
            </div>
        </header>
    )
}

export default Header