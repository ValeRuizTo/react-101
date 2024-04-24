import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='h-[100vh] w-[100vw] flex justify-center items-center bg-grey-500'>
    <App />
    </div>
  </React.StrictMode>,
)
