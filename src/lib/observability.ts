const DEFAULT_OBSERVABILITY_SCRIPT_URL =
  'https://console.crystalflow.online/api/observability/script/wqi2IEirJxC0vbzrLsF2-cDKOIKTsKIE'

export function injectObservabilityScript(): void {
  const url =
    import.meta.env.VITE_OBSERVABILITY_SCRIPT_URL ??
    DEFAULT_OBSERVABILITY_SCRIPT_URL
  if (!url || document.querySelector(`script[data-observability="${url}"]`)) {
    return
  }
  const script = document.createElement('script')
  script.src = url
  script.async = true
  script.dataset.observability = url
  document.head.appendChild(script)
}
