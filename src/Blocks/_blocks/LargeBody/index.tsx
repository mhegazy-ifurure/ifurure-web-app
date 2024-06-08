import React from 'react'


export const LargeBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className=' text-[16px] md:text-[18px] mb-2'>{children}</p>
}
