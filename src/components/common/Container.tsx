import React from 'react'

export default function Container({children}:{children:React.ReactNode}) {
  return (
    <div className=' max-w-[1170px] mx-auto   '>{children}</div>
  )
}
