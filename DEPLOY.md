# Deploying All Matters Visa (AMV)

This guide covers deploying the frontend to Vercel and the backend to Render, and using MongoDB Atlas for the database. It also includes GitHub Actions to trigger CI/CD.

## MongoDB Atlas
1. Create a free cluster at https://cloud.mongodb.com/
2. Create a database user and whitelist your IP (or 0.0.0.0/0 for testing).
3. Copy the connection string and set it as `MONGO_URI` in your server environment variables.

## Backend -> Render
1. Create a new Web Service on Render (https://render.com). Connect your GitHub repo.
2. Use the `server/` directory as the root. Set the start command to `npm start` and the build command to `npm ci`.
3. Add environment variables on Render: `MONGO_URI`, `JWT_SECRET`, `STRIPE_SECRET_KEY`, `AWS_*` and `S3_BUCKET`.
4. Optionally use a `render.yaml` file to define the service (example provided in infra/render.yaml).

## Frontend -> Vercel
1. Import the repo into Vercel (https://vercel.com/new).
2. Set the root directory to `frontend/` and build command `npm run build`. Output directory: `dist`.
3. Add environment variables if the frontend needs any (e.g., API base URL).

## CI/CD (GitHub Actions)
- The included `infra/ci-cd.yml` builds both frontend and backend. To automatically deploy to Render/Vercel, add steps that use the respective deployment actions/CLIs and store API keys/secrets as GitHub repository secrets.

## Notes
- For Render automatic deployments, use Render's GitHub integration or the Render CLI in Actions.
- For Vercel, deployments happen automatically on push if linked to GitHub.
- Make sure CORS is configured correctly and FRONTEND points to the Render backend URL.
