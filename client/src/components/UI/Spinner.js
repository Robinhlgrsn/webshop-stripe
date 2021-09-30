import React from 'react'

const Spinner = () => {
  return (
    <div className="z-0 relative rounded-full border-green-200 border-8 w-20 h-20 m-4">
      <div style={style} className="z-10 absolute animate-spin w-full h-full rounded-full border-8"></div>
    </div>
  )
}

const style = {
  borderColor: 'transparent transparent #6EE7B7 transparent'
}

export default Spinner
