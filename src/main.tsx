import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { injectObservabilityScript } from './lib/observability.ts'
import './styles/global.css'

injectObservabilityScript()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
