// src/prerender.ts
import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App'

export async function prerender() {
  // Return HTML string for the route being rendered
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
