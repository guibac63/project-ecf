import React from 'react'
import Header from './headerComponents/Header'

export default function Layout({children}) {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}
