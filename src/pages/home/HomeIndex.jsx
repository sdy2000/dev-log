import React from 'react'
import { Button1 } from '../../components'

const HomeIndex = () => {
  return (
    <>
      <main>
        <div className='bg-lbp dark:bg-dbp pt-8 pb-2 text-center'>
          <div className='container'>
            <div className='left flex flex-col items-center gap-3'>
              <h1 className='text-xl font-black text-lfp dark:text-dfp'>
                Hi, This is <b className='text-accent'>DEVLog</b>.
                <br />
                Web Developer
              </h1>
              <p className='text-base font-semibold text-lfp dark:text-dfp'>Specialized in Full Stack Development</p>
              <div className="btn-group flex justify-center gap-3">
                <Button1 value={'Contact Us'} href={'#'} />
                <Button1 value={'About Us'} href={'#'} color={'bg-lfs hover:bg-lft text-white dark:bg-dfs dark:hover:bg-dft dark:text-black'} />
              </div>
            </div>
            <div className="right hidden">
              <div className="pattern-bg"></div>
              <div className="img-box">
                <img src="/assets/img/about.png" alt="User Avatar Img" />

                <div className="shap shap-1"></div>
                <div className="shap shap-2"></div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  )
}

export default HomeIndex