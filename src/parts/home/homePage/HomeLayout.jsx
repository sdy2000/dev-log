import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { BottomNavBar, Categores, ShortURL, TopBar, Topics } from '../..'
import { SocialBox } from '../../../components'

const HomeLayout = () => {
    const { slug } = useParams();
    return (
        <>
            {!slug && (
                <TopBar />
            )}
            <BottomNavBar />

            <div className='grid grid-cols-12 pb-12'>
                <div className='col-span-1 h-64 w-12 my-4 hidden md:inline-block sticky left-0 top-[30%] z-20 bg-lbp dark:bg-dbp px-1 py-4 rounded-r-xl shadow-xl'>
                    <SocialBox styles={'socail-icons flex flex-col items-center justify-center gap-3'} />
                </div>

                <div className='grid grid-cols-12 col-span-12 md:col-span-11  bg-lbs dark:bg-dbs max-w-7xl m-auto'>

                    <div className='col-span-12 lg:col-span-7'>
                        <Outlet />
                    </div>
                    <div className='col-span-12 lg:col-span-4 lg:mr-16 lg:mt-[140px]'>
                        <div className='md:sticky relative lg:top-16 mx-auto'>
                            <div className='aside sm:mx-[20%] lg:mx-0'>

                                <Topics />

                                <Categores />

                                {slug && (
                                    <ShortURL />
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLayout