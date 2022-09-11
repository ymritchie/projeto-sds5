FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN REACT_APP_BACKEND_URL=http://apivendas.ymritchie.ga yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["npm", "start"]