// Fake admin numbers until the backend exists.
export const recentOrders = [
  { id: 'LM-8472911', customer: 'Amaya Perera', status: 'Pending', total: 12900 },
  { id: 'LM-8472904', customer: 'Kavindu Silva', status: 'Processing', total: 8900 },
  { id: 'LM-8472898', customer: 'Nethmi Fernando', status: 'Shipped', total: 24500 },
  { id: 'LM-8472887', customer: 'Ruwan Jayasuriya', status: 'Delivered', total: 6200 },
  { id: 'LM-8472870', customer: 'Sahan Wickramasinghe', status: 'Pending', total: 18300 },
]

export const customers = [
  { name: 'Amaya Perera', email: 'amayaperera@email.com', orders: 12 },
  { name: 'Kavindu Silva', email: 'kavindusilva@email.com', orders: 11 },
  { name: 'Nethmi Fernando', email: 'nethmifernando@email.com', orders: 10 },
  { name: 'Ruwan Jayasuriya', email: 'ruwanjayasuriya@email.com', orders: 9 },
  { name: 'Sahan Wickramasinghe', email: 'sahanwickramasinghe@email.com', orders: 8 },
]

export const stats = [
  { label: 'Revenue', value: 'Rs. 248,500', note: '+12.4%' },
  { label: 'Orders', value: '128', note: '+8.2%' },
  { label: 'Customers', value: '842', note: '+15.1%' },
]
