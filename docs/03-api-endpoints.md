# Lumora: API Endpoints (SDLC Phase 2, Design)

Base path `/api`. JSON only. Auth uses a JWT in the `Authorization: Bearer` header.

| Module | Method | Endpoint | Access | Used by (frontend) |
|---|---|---|---|---|
| Auth | POST | /auth/register | Public | Register page |
| | POST | /auth/login | Public | Login page |
| | POST | /auth/forgot-password | Public | Forgot password page |
| | GET | /auth/me | Customer | Account page |
| | POST | /admin/login | Public | Admin login |
| Products | GET | /products (`?gender=&category=&search=&sort=`) | Public | Home, Shop |
| | GET | /products/:idOrSlug | Public | Product page |
| | POST | /products | Admin | Add product |
| | PUT | /products/:id | Admin | Edit product |
| | DELETE | /products/:id | Admin | Admin products |
| Orders | POST | /orders | Public (guest or customer) | Checkout |
| | GET | /orders/my | Customer | My orders |
| | GET | /orders/track/:orderNo | Public | Order tracking |
| | GET | /admin/orders | Admin | Admin orders |
| | PUT | /admin/orders/:id/status | Admin | Admin orders |
| Admin | GET | /admin/stats | Admin | Dashboard |
| | GET | /admin/customers | Admin | Admin customers |
| Payment | POST | /payments/payhere/notify | PayHere server | Payment confirmation (later) |

## Build order (sprints)
1. Products (GET list, GET one, seed from products.json) then connect Home, Shop, Product pages
2. Auth (register, login, me, admin login)
3. Orders (create, my orders, track)
4. Admin (product CRUD, orders, stats, customers)
5. PayHere payment
