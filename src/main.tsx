import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { injectGtm } from './lib/gtm.ts'
import { injectObservabilityScript } from './lib/observability.ts'
import './styles/global.css'

injectObservabilityScript()
injectGtm()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
