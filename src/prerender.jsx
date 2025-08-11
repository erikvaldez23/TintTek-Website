// src/prerender.ts
import { renderToString } from 'react-dom/server'
import { StrictMode } from 'react'
import App from './App'

export async function prerender() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
