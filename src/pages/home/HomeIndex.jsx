import React from 'react'
import { Button1 } from '../../components'

const HomeIndex = () => {
  return (
    <>
      <main>
        <div className='hero'>
          <div className='container'>
            <div className='left'>
              <h1 className='text-xl font-black'>
                Hi, This is <b>DEVLog</b>.
                <br />
                Web Developer
              </h1>
              <p className='text-base font-semibold'>Specialized in Full Stack Development</p>
              <div className="btn-group">
                <Button1 value={'Contact Us'} href={'#'} />
                <Button1 value={'About Us'} href={'#'} color={'bg-lfs hover:bg-lft text-white dark:bg-dfs dark:hover:bg-dft dark:text-black'} />
              </div>
            </div>
            <div className="right">
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