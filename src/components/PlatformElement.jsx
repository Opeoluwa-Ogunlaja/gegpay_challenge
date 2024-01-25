import React, { useEffect, useRef } from 'react'
import { numberFormat } from '../utils/numberFormat'

export const PlatformElement = ({ data }) => {
  const platformSliderRef = useRef(null)

  useEffect(() => {
    if(platformSliderRef.current){
      platformSliderRef.current.style.setProperty('--slider-width', `${data?.width || 200}px`)
    }
  }, [platformSliderRef])
  
  return (
    <div className='flex flex-column gap-xxs'>
        <h4 className='section-header font-semibold'>{data?.title || 'undefined'}</h4>
        <div className='space-y-sm'>
          <div className='platform-slider' ref={platformSliderRef} style={{
            color: data?.color || 'green',
            height: data?.height || 12
          }}></div>
          <div className='justify-between items-center flex'>
            <span>${numberFormat(data.value) || undefined}</span>
            <span>+{data.increase || undefined}%</span>
          </div>
        </div>
    </div>
  )
}
