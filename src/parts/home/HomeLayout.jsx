import React from 'react'
import { Outlet } from 'react-router-dom'
import { Categores, Footer, Header, ShortURL, Topics } from '../'
import { Aside, Button1, SocialBox } from '../../components'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className='hidden md:inline-block fixed left-0 top-[35%] z-20 bg-lbp dark:bg-dbp px-1 py-4 rounded-r-xl shadow-xl'>
                <SocialBox styles={'socail-icons flex flex-col items-center justify-center gap-3'} />
            </div>
            <div className='grid grid-cols-12 pb-12  bg-lbs dark:bg-dbs'>
                <div className='col-span-12 lg:col-span-8'>
                    <Outlet />
                </div>
                <div className='col-span-12 lg:col-span-4'>
                    <div className='md:sticky relative top-5'>
                        <div className='aside sm:mx-[20%] lg:mx-0'>
                            
                            <Topics />

                            <Categores />

                            <ShortURL />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeLayout