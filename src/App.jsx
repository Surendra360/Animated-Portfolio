import React from 'react'
import Landing from './components/page1/Landing'
import Navigation from './components/navigationBar/Navigation'
import Page2 from './components/page2/Page2'

const App = () => {
  return (
    <div> 
      <Navigation />
      <Landing />
      <Page2 />
    </div>
  )
}

export default App