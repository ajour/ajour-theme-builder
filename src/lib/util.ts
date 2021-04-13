import type { Theme } from '$lib/theme'

export function exportTheme(theme: Theme): void {
  const jsonTheme = JSON.stringify(theme, null, 2)

  const elem = document.createElement('a')
  elem.setAttribute(
    'href',
    'data:application/json;charset=utf-8,' + encodeURIComponent(jsonTheme)
  )
  elem.setAttribute('download', 'ajour-custom-theme.json')
  elem.style.display = 'none'

  document.body.appendChild(elem)

  elem.click()

  document.body.removeChild(elem)
}

function encodeThemeParam(theme: Theme): string {
  return `theme=${encodeURIComponent(JSON.stringify(theme))}`
}

export function buildThemeUrl(theme: Theme): string {
  const params = encodeThemeParam(theme)

  const location = window.location
  const port = location.port ? `:${location.port}` : ''

  const url = `${location.protocol}//${location.hostname}${port}?${params}`

  console.log(url)

  return url
}

export function updateThemeUrlParams(theme: Theme): void {
  const params = encodeThemeParam(theme)

  window.history.replaceState('', '', `/?${params}`)
}
