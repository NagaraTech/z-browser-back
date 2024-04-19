import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import RootProvider from './provider/RootProvider.tsx'
import router from './router.tsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  </React.StrictMode>,
)
