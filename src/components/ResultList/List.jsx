import React from 'react'

function List() {
  return (
    <div className='grid grid-cols-12 gap-4'>
        <div className='p-4 text-center'>
            <div className='w-[200px] h-[50px]' style={{filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25)"}}>
                <p>A마트</p>
            </div>
        </div>
    </div>
  )
}

export default List;