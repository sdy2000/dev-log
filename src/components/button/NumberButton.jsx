import React from 'react'

const NumberButton = ({num}) => {
  return (
    <button className='p-2 px-3 rounded-full border-2 flex items-center justify-center shadow-lg transition-all duration-300
     border-lft dark:border-dfs text-lfs dark:text-dfp bg-lbp dark:bg-dbp hover:bg-lft hover:text-lbp dark:hover:bg-dfp dark:hover:text-dbp'>
        {num}
    </button>
  )
}

export default NumberButton