import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size)

  const checkSize = ()=> {
    setSize(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize', checkSize)
    return ()=> {
      window.removeEventListener('resize', checkSize)
    }
  })

  return (
    <>
      <h2>useEffect cleanup</h2>
      <h3>{size}px</h3>
    </>
  )
};

export default UseEffectCleanup;
