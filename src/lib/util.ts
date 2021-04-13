import type { Theme } from '$lib/theme'

export function exportTheme(theme: Theme): void {
  console.log(theme)

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

export function shareTheme(theme: Theme): void {
  const params = `theme=${encodeURIComponent(JSON.stringify(theme))}`;

  const location = window.location;
  const port = location.port ? `:${location.port}` : ''

  const url = `${location.protocol}//${location.hostname}${port}?${params}`

  console.log(url)
}
