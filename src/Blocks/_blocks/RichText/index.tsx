/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import serialize from './serialize'


const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return (
    <div className={['w-full',className].filter(Boolean).join(' ')}>
      {serialize(content)}
    </div>
  )
}

export default RichText
