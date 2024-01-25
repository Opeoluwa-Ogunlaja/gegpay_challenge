import React, { useRef } from 'react'

export const PlatformElement = ({ data }) => {
  return (
    <div className='flex flex-column gap-20'>
        <h4 className='section-header font-semibold'>{data?.title || 'undefined'}</h4>

    </div>
  )
}
