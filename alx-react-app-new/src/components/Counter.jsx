 import { useState } from 'react';
 function Counter() {
  // Declare a state variable called "count", with initial value 0
  const [count, setCount] = useState(0);

  return (
        <div>
         <p>Current Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
         <button onClick={() => setCount(0)}>Reset</button>
       </div>
     );
   }

export default Counter;