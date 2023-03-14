import React from 'react'
import { Button1 } from '../../../components'

const TopBar = () => {
    return (
        <div className='bg-lbp dark:bg-dbp pt-8 pb-2 text-center'>
            <div className='container lg:flex justify-around items-center'>
                <div className='left flex flex-col items-center gap-5 pb-14'>
                    <h1 className='text-3xl font-black text-lfp dark:text-dfp'>
                        Hi, This is <b className='text-accent'>DEV</b>Log.
                        <br />
                        Web Development
                    </h1>
                    <p className='text-base font-semibold text-lfs dark:text-dfs'>Specialized in Full Stack Development</p>
                    <div className="btn-group flex justify-center gap-3">
                        <Button1 value={'Contact Us'} href={'#'} />
                        <Button1
                            value={'About Us'} href={'#'}
                            color={'bg-lbs text-lfs dark:bg-dbp hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent dark:text-dfs  border-lft'} />
                    </div>
                </div>
                <div className="right hidden">
                    <div className="pattern-bg"></div>
                    <div className="relative">
                        <img
                            className=' rounded-full w-80 h-[21rem] z-10'
                            src="/assets/img/about.png"
                            alt="User Avatar Img" />

                        <div className="circle-shap"></div>
                        <div className="circle-shap"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopBar