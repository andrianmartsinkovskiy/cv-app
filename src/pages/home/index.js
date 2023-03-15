import React from 'react'
import {useSelector} from "react-redux";


const HomePage = () => {
  const state = useSelector(state => state.person)

  console.log(state, 'state')

  return (
    <div>
      HomePage
    </div>
  )
}

export {
  HomePage
}