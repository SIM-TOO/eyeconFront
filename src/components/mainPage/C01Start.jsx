import React from 'react'
import useMainRobot from '../../hook/mainPage/useMainRobot';

const C01Start = () => {

  const Robot = useMainRobot();
  return (
    <div
      className="flex flex-col justify-center items-center"
      style={{ width: '100%', height: '100%' }}
    >
      {/* 로봇 로티 */}
      <Robot />

    </div>
  )
}

export default C01Start