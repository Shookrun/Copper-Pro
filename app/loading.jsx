import React from 'react'
import { CircleLoader } from 'react-spinners'

const loading = () => {
  return (
    <div>
       
<CircleLoader
  color="#E4A16F"
  loading
  size={97}
  speedMultiplier={1}
/>
    </div>
  )
}

export default loading