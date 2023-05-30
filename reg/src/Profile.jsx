import React from 'react'

export default function Profile({userData}) {
  // props userdata
  return (
    <div>
       {/* condition */}

      <h2 className='p-4'>Hello {userData?.name}</h2>
      <h3>Welcome in Ecommerce project</h3>
    </div>
  )
}
