FROM node:18 AS client-build

WORKDIR /usr/app/client/
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

FROM node:18 AS server-build
COPY --from=client-build /usr/app/client/dist/ ./usr/app/client/dist
WORKDIR /usr/app/server/
COPY server/package*.json ./
RUN npm install
COPY server/ .
RUN npm run build

CMD [ "node", "dist/main.js" ]