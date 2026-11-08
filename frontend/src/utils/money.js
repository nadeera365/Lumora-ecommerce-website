export const money = (cents) =>
  `Rs. ${(cents / 100).toLocaleString('en-LK', { minimumFractionDigits: 2 })}`

export const imageUrl = (product) => `/${product.image}`
