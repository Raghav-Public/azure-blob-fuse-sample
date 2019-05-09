from node:10-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY index.js ./

CMD ["npm", "start"]