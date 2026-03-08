# Development image for the LearnAI docs one-pager
FROM node:22-alpine

WORKDIR /app

# Install dependencies (copied first for better layer caching)
COPY package.json package-lock.json ./
RUN npm ci

# Copy app source (overridden by volume mount in dev)
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Default: run dev server (use docker compose for live reload)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
