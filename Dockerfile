FROM node:24-alpine as builder

RUN npm install -g pnpm

WORKDIR /app

COPY ./package.json .

RUN pnpm install

COPY . .

RUN pnpm build

FROM node:24-alpine as runner

WORKDIR /app

COPY --from=builder /app/package.json .
# COPY --from=builder /app/pnpm-lock.json .
COPY --from=builder /app/node_modules/ ./node_modules/
COPY --from=builder /app/.next ./.next

CMD [ "npm", "run", "start" ]
