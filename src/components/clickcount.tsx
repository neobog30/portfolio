import React, { useEffect, useState } from 'react'

type ClickcountProps = {

}

const Clickcount: React.FC<ClickcountProps> = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    console.log(`Clicked the button ${count} times`)
  }, [count] )

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Clickcount
