FROM node:20
RUN mkdir /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
#RUN npm install plurality-repconnect-widget@latest
RUN npm install
COPY . /app
RUN npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s","build"]
