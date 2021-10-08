FROM node:lts

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "bin/www" ]

# docker build . -t test-tech/free2move-api
# docker run -p 3000:3000 -d test-tech/free2move-api