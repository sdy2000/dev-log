import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Categores, Footer, Header, TopBar, Topics } from '../'
import { SocialBox } from '../../components'
import BottonNavBar from './BottonNavBar'

const HomeLayout = () => {
    const { slug } = useParams();
    console.log(window.onscroll);
    return (
        <>
            <Header />
            {!slug && (
                <TopBar />
            )}
            <BottonNavBar />
            <div className='grid grid-cols-12 pb-12  bg-lbs dark:bg-dbs max-w-7xl m-auto'>
                <div className='hidden md:inline col-span-1'>
                    <div className='sticky top-60 w-12 z-20 bg-lbp dark:bg-dbp px-1 py-4 rounded-r-xl shadow-xl'>
                        <SocialBox styles={'socail-icons flex flex-col items-center justify-center gap-3'} />
                    </div>
                </div>
                <div className='col-span-12 lg:col-span-7'>
                    <Outlet />
                </div>
                <div className='col-span-12 lg:col-span-4 lg:mr-16 mt-[140px]'>
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