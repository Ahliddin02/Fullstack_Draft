import {useState} from 'react'
import Counter from './Counter'
import Users from './Users'

export default function Example() {

  const [ status, setStatus ] = useState(false)
 
  return (
    <div>
        {
          (status === true) ? <Counter status={status} /> : <Users  status={status} /> 
        }
          <button onClick={() => setStatus(!status)}>change status</button>
    </div>
  )
}

