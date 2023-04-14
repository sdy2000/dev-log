import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { Button1 } from '../../components'

const Register = () => {
    const [isShowPass, setIsShowPass] = useState(false)
    const [isShowRePass, setIsShowRePass] = useState(false)

    return (
        <div className='mx-auto my-56 md:my-80 px-4 w-full max-w-lg'>
            <div className='bg-lbp dark:bg-dbp w-full py-10 rounded-2xl shadow-lg flex flex-col justify-center items-center gap-8'>
                <h1 className='text-lfp dark:text-dfp text-2xl font-bold'>
                    Login
                </h1>
                <form className='flex flex-col items-center w-full'>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='User Name'
                            required />
                    </div>
                    <p className='form-group-p'>This filed is requaird !</p>

                    <div className='form-group'>
                        <input
                            type='email'
                            placeholder='User Name'
                            required />
                    </div>
                    <p className='form-group-p'>This filed is requaird !</p>

                    <div className='form-group'>
                        <input
                            type={!isShowPass ? 'password' : 'text'}
                            placeholder='Password'
                            required />
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
                    <p className='form-group-p'>This filed is requaird !</p>

                    <div className='form-group'>
                        <input
                            type={!isShowPass ? 'password' : 'text'}
                            placeholder='RePassword'
                            required />
                        <span className='bg-lbs dark:bg-dbs text-lfp dark:text-dfp pr-4 hover:scale-110 cursor-pointer duration-300'>
                            {
                                !isShowRePass
                                    ?
                                    <BsEye
                                        onClick={() => { setIsShowRePass(true) }}
                                        size={30} />
                                    :
                                    <BsEyeSlash
                                        onClick={() => { setIsShowRePass(false) }}
                                        size={30} />
                            }
                        </span>
                    </div>
                    <p className='form-group-p'>This filed is requaird !</p>
                    <div className='flex'>
                        <p className='text-lfs dark:text-dfs text-sm font-semibold'>
                            If you have an account,
                        </p>
                        <b className='text-accent hover:underline ml-2'>
                            <Link to='/login'>
                                Log in
                            </Link>
                        </b>
                    </div>

                    <Button1 value={'Login'} color='bg-accent text-white hover:bg-lft hover:text-lfp hover:border-lft border-accent px-8 mt-6' />
                </form>
            </div>
        </div>
    )
}

export default Register