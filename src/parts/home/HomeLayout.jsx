import React from 'react'
import { IoAccessibilityOutline, IoRocketOutline, IoServerOutline } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../'
import { Aside, TopicButton } from '../../components'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className='grid grid-cols-12 pb-8'>
                <div className='col-span-12 md:col-span-8'>
                    <Outlet />
                </div>
                <div className='col-span-12 md:col-span-4 bg-lbs dark:bg-dbs'>
                    <div className='md:sticky relative top-5'>
                        <div className='aside'>
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
                                <input
                                    className='bg-lbs dark:bg-dbs rounded-2xl shadow-lg px-4 py-2 border-2 border-lft dark:border-dft text-lfp dark:text-dfp'
                                    readOnly
                                    type='text'
                                    value="http://localhost:3000/suyrs"
                                />
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