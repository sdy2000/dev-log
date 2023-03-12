import React from 'react'
import { NumberButton } from '..'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const nums = [1, 2, 3, 4]

const PageNumButton = () => {
    return (
        <div className='page-number flex items-center justify-center gap-2'>
            <NumberButton num={<AiOutlineLeft />} />
            {nums.map(num => (
                <NumberButton num={num} key={num} />
            ))}
            <NumberButton num={<AiOutlineRight />} />
        </div>
    )
}

export default PageNumButton