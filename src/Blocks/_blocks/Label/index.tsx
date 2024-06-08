import React from 'react'


export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <p className={'leading-[24px] text-[13px] md:text-[16px] uppercase'}>{children}</p>
}
