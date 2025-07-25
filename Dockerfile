# Build stage
FROM node:22-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production image
FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY server.js .
RUN npm install express
EXPOSE 3000
CMD ["node", "server.js"]
