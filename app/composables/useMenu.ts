/**
 * Global state for the pop-out menu.
 * One source of truth so the header burger, the panel, the scrim
 * and the layout's page-shrink all agree.
 */
export function useMenu() {
  const open = useState<boolean>('menu-open', () => false)

  const toggle = () => {
    open.value = !open.value
  }
  const close = () => {
    open.value = false
  }
  const show = () => {
    open.value = true
  }

  return { open, toggle, close, show }
}
