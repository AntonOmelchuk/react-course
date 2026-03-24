import { useEffect, useState } from "react"

const Learn = () => {
  console.log('Render Learn component');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Call useEffect');
  }, [])

  return (
    <div>
      <><h1>Learn React</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button></>
    </div>
  )
}

export default Learn