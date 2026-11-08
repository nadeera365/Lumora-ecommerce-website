# Lumora Clothing Shop

Online clothing store (Clothing, Footwear, Accessories) for Sri Lanka.
Stack: React + Vite frontend, Node/Express + MongoDB backend (planned).
Written from the finished frontend, then used to plan the backend.

## 1. Functional requirements

| ID | Requirement | Frontend now | Backend needed |
|---|---|---|---|
| FR-01 | Home page: banner slider, category tiles, featured products | Done | Product list |
| FR-02 | Shop page: filter by gender and category, sort by price/popularity, search by name | Done (client side) | Query filters |
| FR-03 | Product page: image, price, rating, stock status, description, quantity picker | Done | Get one product |
| FR-04 | Cart: add, change quantity (max 10), remove, subtotal, delivery fee | Done (localStorage) | None (stays client side) |
| FR-05 | Checkout: name, email, phone, address, city, place order | UI done | Create order |
| FR-06 | Payment through PayHere | Placeholder text only | Payment gateway |
| FR-07 | Customer register, login, forgot password | UI only (fake, localStorage) | Real auth (JWT) |
| FR-08 | Account page: details, links to orders and tracking | UI done | Get profile |
| FR-09 | My orders list | Shows last order only | Orders per user |
| FR-10 | Order tracking by order number (4 stages) | Static timeline | Track order |
| FR-11 | Admin login on a private route (/admin/login) | UI only | Admin auth |
| FR-12 | Admin dashboard: revenue, orders, customers, products counts | Mock numbers | Stats |
| FR-13 | Admin manage products (add, edit, delete) | List only, buttons not wired | Product CRUD |
| FR-14 | Admin view orders and update status | Mock list | Order list, status update |
| FR-15 | Admin view customers | Mock list | Customer list |
| FR-16 | Wishlist (heart button) | Button only, no action | Optional, later |

## 2. Non-functional requirements
- NFR-01 Responsive on mobile and desktop (done)
- NFR-02 Passwords stored hashed, admin routes protected by role
- NFR-03 API returns JSON with proper status codes (400, 401, 403, 404)
- NFR-04 Respect reduced-motion setting for animations (done)

## 3. Out of scope (for now)
Sizes and colour variants, product reviews, coupons, multiple addresses, email notifications.

