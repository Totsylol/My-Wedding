# ---------- React build stage ----------
    FROM node:18-alpine AS build
    WORKDIR /app
    
    # install deps
    COPY package*.json ./
    RUN npm ci
    
    # copy source & build
    COPY . .
    RUN npm run build            # outputs /app/build
    
    # ---------- Nginx runtime ----------
    FROM nginx:1.27-alpine
    # custom SPA fallback config
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    # static files
    COPY --from=build /app/build /usr/share/nginx/html