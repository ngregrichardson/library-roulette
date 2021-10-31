FROM node:16-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . ./
EXPOSE 5000
RUN yarn build
CMD yarn serve