import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { getDemoErrorSpec } from '../lib/demo-errors.ts'

export function DemoErrorTools() {
  const { pathname, search } = useLocation()
  const spec = getDemoErrorSpec(pathname)

  useEffect(() => {
    const params = new URLSearchParams(search)
    if (!params.has('cry_simulate_error')) {
      return
    }

    const { fire } = getDemoErrorSpec(pathname)
    const timerId = window.setTimeout(() => {
      fire()
    }, 1500)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [pathname, search])

  return (
    <div id="cry-demo-error-actions" className="demo-error-actions">
      <button
        type="button"
        id="cry-demo-error-trigger"
        className="btn-demo-error btn-demo-error-fixed"
        data-demo-page={spec.pageKey}
        aria-label={spec.ariaLabel}
        onClick={() => spec.fire()}
      >
        {spec.buttonLabel}
      </button>
    </div>
  )
}
