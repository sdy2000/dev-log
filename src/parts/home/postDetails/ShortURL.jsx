import React from 'react'
import { Aside, Button1 } from '../../../components'

const ShortURL = () => {
  return (
    <Aside title={'Short URL'}>
      <div className='flex flex-col gap-5 md:flex-row md:justify-center md:items-center'>
        <input
          className='md:w-[60%] bg-lbs dark:bg-dbs rounded-2xl shadow-lg px-4 py-2 border-2 border-lft dark:border-dft text-lfp dark:text-dfp'
          readOnly
          type='text'
          value="http://localhost:3000/suyrs"
        />
        <span className='md:w-[30%] '>
          <Button1
            value={'Copy'}
          />
        </span>
      </div>
    </Aside>
  )
}

export default ShortURL