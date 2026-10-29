const GTM_ID = 'GTM-TTPJZ5LT'
const GTM_SCRIPT_URL = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`

export function injectGtm(): void {
  if (document.querySelector(`script[data-gtm="${GTM_ID}"]`)) {
    return
  }

  const loader = document.createElement('script')
  loader.src = GTM_SCRIPT_URL
  loader.async = true
  loader.dataset.gtm = GTM_ID
  document.head.appendChild(loader)

  const inline = document.createElement('script')
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  `
  document.head.appendChild(inline)
}
