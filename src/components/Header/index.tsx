import React from 'react'
import { Link } from 'react-router-dom'
import WalletInfo from './WalletInfo'
function Header() {
  return (
    <div className='flex w-full items-center justify-center'>
      <div className='flex items-center justify-between max-w-7xl px-2 py-4 gap-4 flex-grow'>
        <div className='flex items-center gap-4'>
          <Link to={'/'}>
              Home
            </Link>
          <Link to={'/message'}>Message</Link>
          <Link to={'/ai'}>AI</Link>
        </div>
        <div>
          <WalletInfo />
        </div>
      </div>
    </div>
  )
}

export default Header