import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const Login = () => {
    const [isShowPass, setIsShowPass] = useState(false)

    return (
        <div className='mx-auto my-20 px-4 w-full max-w-lg'>
            <div className='bg-lbp dark:bg-dbp w-full py-10 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-8'>
                <h1 className='text-lfp dark:text-dfp text-2xl font-bold'>
                    Login
                </h1>
                <form className='flex flex-col items-center gap-4 w-full'>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='User Name' />
                    </div>
                    <div className='form-group'>
                        <input
                            type={!isShowPass?'password':'text'}
                            placeholder='Password' />
                        <span className='bg-lbs dark:bg-dbs text-lfp dark:text-dfp pr-4 hover:scale-110 cursor-pointer duration-300'>
                            {
                                !isShowPass
                                    ?
                                    <BsEye
                                        onClick={() => { setIsShowPass(true) }}
                                        size={30} />
                                    :
                                    <BsEyeSlash
                                        onClick={() => { setIsShowPass(false) }}
                                        size={30} />
                            }
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login