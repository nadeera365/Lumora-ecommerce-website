// Temporary storage for the last order. The backend will replace this.
const KEY = 'lumora_last_order'

export const saveLastOrder = (order) => localStorage.setItem(KEY, JSON.stringify(order))

export const getLastOrder = () => {
  try {
    return JSON.parse(localStorage.getItem(KEY))
  } catch {
    return null
  }
}
