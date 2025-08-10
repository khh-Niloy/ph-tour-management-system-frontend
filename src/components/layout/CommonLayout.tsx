import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface IProps{
    children: ReactNode
}

export const CommonLayout = ({children}: IProps) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <Navbar/>
        <div className='grow-1 container mx-auto'>{children}</div>
        <Footer/>
    </div>
  )
}
