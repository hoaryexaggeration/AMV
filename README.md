# All Matters Visa - Working Repo (Frontend + Backend)

This repo contains a working starter for the All Matters Visa (AMV) platform:
- Frontend: Vite + React + Tailwind CSS (minimal working build)
- Backend: Node.js + Express + MongoDB (Mongoose), JWT auth, Stripe payment endpoint, S3 signed URL upload, partner portal endpoints (reports, CSV export)
- Infra: Dockerfiles, docker-compose for local dev, GitHub Actions workflow for CI/CD
- Branding pulled from provided AMV proposal PDF: Company name **All Matters Visa**, contact **+254 720 296 981**, email **allmattersvisa@gmail.com**

## How to use (local dev)
1. Copy `.env.example` to `.env` in `server/` and fill values (MONGO_URI, JWT_SECRET, STRIPE_SECRET_KEY, AWS credentials).
2. Start with Docker Compose: `docker-compose up --build`
3. Frontend runs at http://localhost:5173 and backend at http://localhost:4000
4. To build production images, use the included Dockerfiles and GitHub Actions

Files generated automatically by ChatGPT. Customize further as needed.


## Tests & Linting
- Frontend E2E tests: `cd frontend && npm ci && npx playwright install && npm run test:e2e`
- Lint: `cd frontend && npm run lint` and `cd server && npm run lint`
