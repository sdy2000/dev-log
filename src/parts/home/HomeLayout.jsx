import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Categores, Footer, Header, TopBar, Topics } from '../'
import { SocialBox } from '../../components'

const HomeLayout = () => {
    const { slug } = useParams();
    return (
        <>
            <Header />
            {!slug && (
                <TopBar />
            )}
            <div className='hidden md:inline-block fixed left-0 top-[35%] z-20 bg-lbp dark:bg-dbp px-1 py-4 rounded-r-xl shadow-xl'>
                <SocialBox styles={'socail-icons flex flex-col items-center justify-center gap-3'} />
            </div>
            <div className='grid grid-cols-11 pb-12  bg-lbs dark:bg-dbs max-w-7xl m-auto'>
                <div className='col-span-11 lg:col-span-7'>
                    <Outlet />
                </div>
                <div className='col-span-11 lg:col-span-4 mr-20 mt-[140px]'>
                    <div className='md:sticky relative top-5 mx-auto'>
                        <div className='aside sm:mx-[20%] lg:mx-0'>

                            <Topics />

                            <Categores />

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeLayout