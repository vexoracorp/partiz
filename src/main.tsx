import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router'
import { RouterProvider } from 'react-router-dom'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)