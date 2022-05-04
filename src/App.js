import React from 'react'
import Layout from './containers/Layout/Layout'

const style={
        maxWidth:'100vw',
        height:'100vh',
        margin:'0',
        padding:'0'
      }

const App = () => {
  return (
    <div style={style}>
      <Layout/>
    </div>
  )
}

export default App