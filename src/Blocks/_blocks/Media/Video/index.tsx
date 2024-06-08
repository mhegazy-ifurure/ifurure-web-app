/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useEffect, useRef, useState } from 'react'

import { Props as MediaProps } from '../types'

import classes from './index.module.scss'

export const Video: React.FC<MediaProps> = props => {
  const { videoClassName, resource, onClick } = props

  const videoRef = useRef<HTMLVideoElement>(null)
  const [showFallback ,setShowFallback ] = useState<boolean>()

  useEffect(() => {
    const { current: video } = videoRef
    if (video) {
      video.addEventListener('suspend', () => {
        setShowFallback(true);
        console.warn('Video was suspended, rendering fallback image.')
      })
    }
  }, [])

  if (resource && typeof resource !== 'string') {
    const { filename } = resource

    return (
      <video
        playsInline
        autoPlay
        muted
        loop
        controls={false}
        className={[classes.video, videoClassName].filter(Boolean).join(' ')}
        onClick={onClick}
        ref={videoRef}
      >
        <source src={`${import.meta.env.REACT_APP_API_URL}/media/${filename}`} />
      </video>
    )
  }

  return null
}
