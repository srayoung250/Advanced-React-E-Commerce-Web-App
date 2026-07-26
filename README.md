# Advanced React E-Commerce App

A React + TypeScript e-commerce application built around the FakeStoreAPI, featuring a product catalog with category filtering, a Redux-powered shopping cart with persistence, and a checkout flow.

## Features

- **Landing Page** — welcome screen with a "Shop Now" call to action
- **Product Catalog** — fetches all products via React Query, displaying title, price, category, description, rating, and image for each
- **Image Fallback** — broken FakeStoreAPI image URLs fall back to a placeholder image so the layout stays consistent
- **Category Filtering** — a dynamically populated dropdown (pulled live from the API, not hardcoded) filters the catalog by category
- **Shopping Cart** — powered by Redux Toolkit; add items from the catalog, view them in the cart with title, image, count, and price, and remove items individually
- **Persistent Cart** — cart contents are saved to `sessionStorage`, so they survive page refreshes within the same browser session
- **Live Totals** — total item count and total price update automatically as the cart changes
- **Checkout** — simulates a purchase by clearing the Redux cart state and `sessionStorage`, with a success message shown to the user
- **Nav Bar** — persistent navigation with a live cart item count badge

## Tech Stack

- React + TypeScript
- Vite
- Redux Toolkit + React Redux (cart state management)
- TanStack React Query (data fetching)
- React Router
- React Bootstrap
- Axios
- [FakeStoreAPI](https://fakestoreapi.com/) (mock product data)

## Project Structure

src/
├── api/
│ └── products.ts # FakeStoreAPI calls (products, categories, category filter)
├── app/
│ └── store.ts # Redux store configuration
├── features/
│ └── cart/
│ ├── cartSlice.ts # Redux Toolkit slice: add/remove/clear cart items
│ └── Cart.tsx # Cart page UI
├── components/
│ ├── Landing.tsx # Home/welcome page
│ ├── Home.tsx # Product catalog page
│ ├── ProductCard.tsx # Individual product display + add-to-cart
│ ├── CategoryFilter.tsx # Dynamic category dropdown
│ └── NavBar.tsx # Top navigation with cart badge
├── types/
│ └── product.ts # Product and CartItem TypeScript interfaces
├── App.tsx # Route definitions
└── main.tsx # Redux Provider, React Query Provider, Router setup

## Architecture Notes

- **Data fetching** is handled by React Query (`useQuery`), which manages loading/error states and caching for product and category data pulled from FakeStoreAPI.
- **Cart state** lives entirely in Redux Toolkit (`cartSlice.ts`), exposing `addToCart`, `removeFromCart`, and `clearCart` actions. The store is the single source of truth shared across the Nav Bar, Cart page, and Product Catalog.
- **Persistence** is handled manually inside the cart slice — cart changes are written to `sessionStorage` on every add/remove, and read back in on initial load, so a page refresh doesn't lose the cart.
- **Routing** uses `react-router-dom` with three routes: `/` (landing), `/shop` (product catalog), and `/cart` (shopping cart).

## Known Limitations

- Checkout is simulated only — no real payment processing or order history (FakeStoreAPI doesn't support this)
- Cart persists only for the browser session (`sessionStorage`, not `localStorage`) — it clears when the browser tab/session ends
