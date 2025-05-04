import React from 'react'
import { yt_logo, hamburger_logo, user_icon } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { toggleMenuButton } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenu = () => {
    dispatch(toggleMenuButton());
  }

  return (
    <div className='grid grid-cols-12 p-4'>
      <div className='col-span-2 flex'>
        <img className='h-8 cursor-pointer' alt='menu' src={hamburger_logo} onClick={toggleMenu} />
        <a href="/"> <img className='h-8' alt='youtube-logo'
          src={yt_logo} /></a>
      </div>
      <div className='col-span-9  flex flex-row justify-center' >
        <input className='px-4 w-8/12 border border-black rounded-l-full active:border-blue-500' type='text' placeholder='Search' />
        <p className='rounded-r-full p-2 border border-black px-2'>
          🔍</p>
      </div>
      <div className='col-span-1 flex justify-end '>
        <img className='h-8' src={user_icon} alt='user' />
      </div>
    </div>
  )
}

export default Header