import React from 'react'
import { IoAccessibilityOutline, IoRocketOutline, IoServerOutline } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../'
import { Aside, TagButton, TopicButton } from '../../components'

const HomeLayout = () => {
    return (
        <>
            <Header />
            <div className='grid grid-cols-12 mb-8'>
                <div className='col-span-12 md:col-span-8'>
                    <Outlet />
                </div>
                <div className='col-span-12 md:col-span-4'>
                    <div className='md:sticky relative top-5'>
                        <div className='aside'>
                            <Aside title={'Topics'}>
                                <TopicButton topicName={'Database'} topicIcon={<IoServerOutline />} />
                                <TopicButton topicName={'Accessibility'} topicIcon={<IoAccessibilityOutline />} />
                                <TopicButton topicName={'Web Performance'} topicIcon={<IoRocketOutline />} />
                            </Aside>

                            <Aside title={'Categories'}>
                                <ul className=''>
                                    <li>Home</li>
                                    <li>Tob Blog</li>
                                    <li>Recent Blog</li>
                                    <li>About Us</li>
                                    <li>Contact Us</li>
                                </ul>
                            </Aside>

                            <Aside title={'Short URL'}>
                                <input
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