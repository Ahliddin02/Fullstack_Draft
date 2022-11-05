import React from 'react'

function Child2(props) {
    const lastName = "Doe"
  return (
     <button onClick={() => props.Child2(lastName)} > Click </button>
  )
}
export default Child2