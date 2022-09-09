import React from 'react'
import Banner from './Banner'
import Cards from './Cards'
import Menu from './Menu'
import Tutorial from './Tutorial'
import Week from './Week'

const home = () => {
  return (
    <div className="container">
      <Menu/>
      <Banner/>
      <Cards/>
      <Week/>
      <Tutorial/>
    </div>
  )
}

export default home