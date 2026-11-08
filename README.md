# LUMORA

Full-stack online clothing store for men and women, built with the MERN stack.

| Part | Folder | Status |
|---|---|---|
| Frontend (React + Tailwind CSS) | `frontend/` | Done, runs on sample data |
| Docs (requirements, architecture, API) | `docs/` | Done |
| Backend (Node, Express, MongoDB) | `backend/` | Not started yet |

## Repository structure

```
Lumora/
├── frontend/      React app (storefront, customer pages, admin screens)
├── backend/       API server (planned, empty for now)
├── docs/          SDLC documents
└── README.md
```

## Features (frontend)

**Storefront**
- Home with an animated banner slider, Women / Men category tiles, featured products and a services section
- Shop with filters (Women, Men, type), sorting and search
- Product page with quantity picker and add to bag
- Shopping bag with delivery fee and total, saved after refresh
- Guest checkout and confirmation
- Customer login, register, forgot password, account, my orders and order tracking

**Admin (private route `/admin/login`)**
- Dashboard, products, orders and customers screens

**Design**
- Palette: crimson `#932e40`, rose `#a24e5e`, silver `#cfcfd1`
- Three hero banners with fade, slow zoom and progress dots
- Small animations that switch off when the visitor prefers reduced motion
- Responsive for phone, tablet and desktop

## Tech stack

| Layer | Tool |
|---|---|
| Frontend | React 19, Vite, React Router, Tailwind CSS v4 |
| State | React Context + localStorage |
| Backend (planned) | Node.js, Express, MongoDB with Mongoose |
| Hosting (planned) | Vercel (frontend), Render or Railway (API), MongoDB Atlas (database) |

## Run the frontend

```bash
git clone https://github.com/nadeera365/<repo-name>.git
cd <repo-name>/frontend
npm install
npm run dev
```

Open `http://localhost:5173`.

| Command | What it does |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Production build in `frontend/dist` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Check code with ESLint |

## What is real and what is demo

| Area | Now |
|---|---|
| Products | Sample data in `frontend/src/data/products.json` (men and women clothing) |
| Bag | Real, saved in the browser |
| Checkout and orders | Kept in the browser only, no payment yet |
| Customer login and register | Demo only, no real password check |
| Order tracking | Static timeline |
| Admin | Demo sign in and sample numbers |

Delivery rule: Rs. 450 flat, free from Rs. 10,000 (`frontend/src/utils/money.js`).

## Documentation (`docs/`)

| File | Content |
|---|---|
| [requirement.md](docs/requirement.md) | What the system must do |
| [architecture.md](docs/architecture.md) | How frontend, backend and database fit together |
| [api-document.md](docs/api-document.md) | API endpoints with request and response examples |
| [02-er-diagram.md](docs/02-er-diagram.md) | Database design |

## Frontend structure

```
frontend/src/
├── App.jsx            routes only
├── pages/             one file per screen (admin screens in pages/admin)
├── components/        layout/, ui/ and feature components
├── context/           CartContext, AuthContext
├── api/products.js    data access (local data now, API later)
├── data/              products, banners, admin sample data
└── utils/             price format and delivery rule
```

## Roadmap

1. Backend setup in `backend/` (Express, MongoDB) and product seed
2. Products API, then connect Home, Shop and Product pages (change only `frontend/src/api/products.js`)
3. Authentication: register, login, admin login
4. Orders API: create, my orders, track by order number
5. Admin API: products, orders, customers, stats
6. Online payment (PayHere) and deployment

## Author

Nadeera Shasika, BSc (Hons) Computer Science and Technology, Sabaragamuwa University of Sri Lanka.
GitHub: [nadeera365](https://github.com/nadeera365)