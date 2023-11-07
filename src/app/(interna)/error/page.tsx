import React from 'react'

export default function Error() {
  // const data = undefined
  
  return (
    
    <div>
      {true ? throw new Error("An error has occurred") : null}
    </div>
  )
}