FROM node:14-alpine

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

RUN REACT_APP_BACKEND_URL=http://apivendas.ymritchie.ga yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]