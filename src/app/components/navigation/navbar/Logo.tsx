import React from 'react'
import logo from '../../../../../public/logo.jpg'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Image src={logo}
        alt="Image logo"
        width={75}
        height={70}
    />
  )
}
