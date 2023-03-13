import React from 'react'
import { IoAccessibilityOutline, IoRocketOutline, IoServerOutline } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../'
import { Aside, Button1, SocialBox, TopicButton } from '../../components'

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
                            <Aside title={'Topics'}>
                                <div>
                                    <TopicButton topicName={'Database'} topicIcon={<IoServerOutline />} />
                                    <TopicButton topicName={'Accessibility'} topicIcon={<IoAccessibilityOutline />} />
                                    <TopicButton topicName={'Web Performance'} topicIcon={<IoRocketOutline />} />
                                </div>
                            </Aside>

                            <Aside title={'Categories'}>
                                <ul className='text-lfs dark:text-dfs flex flex-col gap-1'>
                                    <li>Home</li>
                                    <li>Tob Blog</li>
                                    <li>Recent Blog</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                </ul>
                            </Aside>

                            <Aside title={'Short URL'}>
                                <div className='bg-lbp dark:bg-dbp mb-8 mx-4 px-3 py-6 rounded-lg shadow-lg flex flex-col gap-5 md:flex-row md:justify-center md:items-center'>
                                    <input
                                        className='md:w-[60%] bg-lbs dark:bg-dbs rounded-2xl shadow-lg px-4 py-2 border-2 border-lft dark:border-dft text-lfp dark:text-dfp'
                                        readOnly
                                        type='text'
                                        value="http://localhost:3000/suyrs"
                                    />
                                    <span className='md:w-[30%] '>
                                        <Button1
                                            value={'Copy URL'}
                                        />
                                    </span>
                                </div>
                            </Aside>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeLayout