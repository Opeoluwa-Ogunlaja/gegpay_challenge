import React, { useEffect, useRef } from 'react'
import { numberFormat } from '../utils/numberFormat'

export const PlatformElement = ({ data }) => {
  const platformSliderRef = useRef(null)

  useEffect(() => {
    if(platformSliderRef.current){
      platformSliderRef.current.style.setProperty('--slider-width', `${(((data?.width || 200) / 452) * 100)}%`)
    }
  }, [platformSliderRef])
  
  return (
    <div className='flex flex-column gap-base'>
        <h4 className='section-header font-semibold leading-norm clr-neutral-900'>{data?.title || 'undefined'}</h4>
        <div className='space-y-base'>
          <div className='platform-slider' ref={platformSliderRef} style={{
            color: data?.color || 'green',
            height: data?.height || 12
          }}></div>
          <div className='justify-between items-center flex font-regular leading-wider text-md'>
            <span className='clr-neutral-900'>${numberFormat(data.value) || undefined}</span>
            <span className='clr-neutral-900'>+{data.increase || undefined}%</span>
          </div>
        </div>
    </div>
  )
}
