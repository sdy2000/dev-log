import React from 'react'
import { Button1 } from '../../../components'

const TopBar = () => {
    return (
        <div className='bg-lbp dark:bg-dbp pt-8 pb-2 text-center'>
            <div className='container lg:grid grid-cols-2 justify-around items-center lg:py-12 xl:py-16 xl:px-36 2xl:px-64'>
                <div className='left flex flex-col items-center gap-5 pb-14 lg:col-span-1'>
                    <h1 className='text-3xl font-black text-lfp dark:text-dfp md:leading-[3.25rem] lg:text-4xl lg:leading-[4rem]'>
                        Hi, This is <b className='text-accent'>DEV</b>Log.
                        <br />
                        Web Development
                    </h1>
                    <p className='text-base font-semibold text-lfs dark:text-dfs lg:text-lg'>Specialized in Full Stack Development</p>
                    <div className="btn-group flex justify-center gap-3">
                        <Button1 value={'Contact Us'} href={'#'} />
                        <Button1
                            value={'About Us'} href={'#'}
                            color={'bg-lbs text-lfs dark:bg-dbp hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent dark:text-dfs  border-lft'} />
                    </div>
                </div>
                <div className="right hidden lg:inline lg:col-span-1">
                    <div className="relative mb-16">

                        <div className="pattern-bg"></div>
                        <div className="circle-shap bg-dfs dark:bg-lfs -top-24 right-10 xl:-top-[100px] xl:right-[35px]"></div>
                        <div className="circle-shap bg-accent -top-32 right-16 xl:-top-[123px] xl:right-[55px]"></div>

                        <img
                            className=' rounded-full max-w-[283px] absolute -top-[173px] right-[67px]
                             xl:max-w-[320px] xl:-top-48 xl:right-12'
                            src="/assets/img/about.png"
                            alt="User Avatar Img" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopBar