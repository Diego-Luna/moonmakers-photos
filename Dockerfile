FROM node:14.15.2

WORKDIR .

COPY package.json /package.json

RUN npm install

COPY . ./

CMD [ "npm", "run", "on" ]
