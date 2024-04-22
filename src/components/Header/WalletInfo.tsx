import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react'
import React from 'react'
export default function WalletInfo() {
  return (
    <div>
    <div>
      <Popover trigger='hover'>
        <PopoverTrigger>
          <div className='flex items-center gap-4 cursor-pointer'>
            <span>Register</span>
            <span>Login</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverBody>
            <div>
              Chat
            </div>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  </div>
  )
}