import React from 'react'
import './Preloader.css'
import { useEffect } from 'react'
import {preLoaderAnim} from '../../animations/index.js'

const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[])

  return (
    <div className='preloader'>
      <div className='texts-container'>
        <span>DeveLop,</span>
        <span>Get Errors</span>
        <span>Flex Errors</span>
      </div>
    </div>
  )
}

export default PreLoader
