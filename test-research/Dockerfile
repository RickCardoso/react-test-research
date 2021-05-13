# DEPENDENCIES IMG
FROM node:14.15-stretch as base

ARG NPM_TOKEN

WORKDIR /app
COPY .npmrc ./
COPY package*.json ./
RUN npm ci
COPY . ./
RUN rm .npmrc

# BUILD
FROM base as builder
RUN npm run build
RUN npm prune --prod

# PROD IMAGE
FROM node:14.15-alpine3.11
EXPOSE 3000/tcp
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
CMD npm run start
