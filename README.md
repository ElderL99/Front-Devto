# Dev.to Clone – README Drafts

Below you’ll find **two independent README drafts**—one for the **frontend** (`Front-Devto`) and one for the **backend** (`Apidevto`).

---

## 1. Front‑Devto (Next.js Frontend)

### Table of Contents

1. [Project Overview](#project-overview)
2. [Live Demo / Screenshots](#live-demo--screenshots)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Getting Started](#getting-started)
6. [Environment Variables](#environment-variables)
7. [Available Scripts](#available-scripts)
8. [Folder Structure](#folder-structure)
9. [Contributing](#contributing)
10. [License](#license)

### Project Overview

A pixel‑close **frontend clone of [DEV Community](https://dev.to/)** built with **Next.js (App Router)**, **React 18**, and **Tailwind CSS**.  The UI consumes the REST & WebSocket API provided by the companion **Apidevto** server.

### Live Demo / Screenshots

Add a few screenshots or a Loom link here. *(Placeholders—replace with real links)*

### Tech Stack

* **Framework:** Next.js 14 / React 18
* **Styling:** Tailwind CSS + Headless UI + Hero Icons
* **State / Data:** React Context API, SWR (optional) & Axios
* **Auth:** JWT stored in `HttpOnly` cookies
* **Realtime:** `socket.io‑client`
* **Markdown:** `markdown-it`, `rehype-highlight`
* **Tooling:** ESLint, Prettier, Husky + lint‑staged, Commitizen, Vitest (unit tests)

### Features

| Category | Details                                                                              |
| -------- | ------------------------------------------------------------------------------------ |
| Auth     | Register, Login, Refresh, Logout, Password hashing with **bcrypt**                   |
| Posts    | CRUD, Cover‑image upload, Markdown + syntax highlight, Reactions (`❤️`,`🥳`,`🔥`, …) |
| Feed     | Global & personalized timelines, Infinite‑scroll (intersection observer)             |
| Tags     | Trending tag list, Filter feed by tag                                                |
| Search   | Full‑text post search with debounced input                                           |
| Comments | Threaded comments, Edit/Delete own comments                                          |
| Realtime | Live post/comment counters and notifications via WebSockets                          |
| Profile  | User bio, social links, own posts & bookmarks                                        |
| Mobile   | Fully responsive; custom mobile navbar & slide‑over menu                             |

### Getting Started

```bash
# 1. Clone the repo
$ git clone https://github.com/ElderL99/Front-Devto.git && cd Front-Devto

# 2. Install dependencies
$ pnpm install   # or npm/yarn

# 3. Configure environment
$ cp .env.example .env.local  # fill the variables below

# 4. Start dev server
$ pnpm dev  # Next.js runs at http://localhost:3000
```

#### Environment Variables

| Variable                               | Description                        | Example                     |
| -------------------------------------- | ---------------------------------- | --------------------------- |
| `NEXT_PUBLIC_API_BASE_URL`             | URL of the Apidevto REST API       | `http://localhost:5000/api` |
| `NEXT_PUBLIC_SOCKET_URL`               | WebSocket endpoint                 | `http://localhost:5000`     |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`    | Cloudinary cloud name (for images) | `devto-clone`               |
| `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET` | Unsigned preset id                 | `devto_unsigned`            |

*(Add any other variables found in `next.config.js` or `lib/api.js`)*

### Available Scripts

| Script    | Purpose                               |
| --------- | ------------------------------------- |
| `dev`     | Start Next.js in development mode     |
| `build`   | Build the production bundle           |
| `start`   | Run the compiled app on a Node server |
| `lint`    | ESLint analysis                       |
| `test`    | Unit tests with Vitest                |
| `prepare` | Set up Husky git hooks                |

### Folder Structure (simplified)

```
/app              # Next 14 App Router pages & layouts
/components       # Reusable UI components (Header, Sidebar, PostCard…)
/context          # AuthContext, ThemeContext, etc.
/hooks            # Custom hooks (useAuth, useInfiniteScroll…)
/lib              # api.ts (Axios instance), socket.ts, helpers
/public           # Static assets (SVG icons, images)
/styles           # Global Tailwind styles
```

### Contributing

1. Fork the project & create your feature branch (`git checkout -b feat/amazingFeature`).
2. Commit your changes using **Conventional Commits** (`git cz`).
3. Push & open a **PR** against `main`.

### License

Licensed under the **MIT License** — see [`LICENSE`](LICENSE) for details.

---

