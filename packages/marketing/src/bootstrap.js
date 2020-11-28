import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount function: renders the app to a specified root element
const mount = (el) => {
  ReactDOM.render(<App />, el)
}

// If we are running independently & in dev mode, mount the app immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')
  // If found, render immediately
  if (devRoot) {
    mount(devRoot)
  }
}

// Remote host will use the mount function to render
export { mount }
