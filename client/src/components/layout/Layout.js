import React from 'react'

const Layout = (props) => {
  return (
    <div className="relative w-screen h-screen">
      {props.children}
    </div>
  )
}

export default Layout
