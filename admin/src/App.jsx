import React from 'react'
import Navbar from './componets/Navbar/Navbar'
import Sidebar from './componets/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App
