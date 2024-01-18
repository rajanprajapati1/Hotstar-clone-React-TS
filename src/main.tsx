import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './Responsive.css'
import { MyContextProvider } from './contexts/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*  @ts-ignore  */}
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>,
)
