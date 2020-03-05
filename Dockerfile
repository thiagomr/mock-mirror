FROM mhart/alpine-node:10

WORKDIR /src

COPY package.json /src
RUN npm install
ADD . .

RUN apk add --update tzdata
ENV TZ=America/Sao_Paulo
RUN rm -rf /var/cache/apk/*

RUN npm run build

EXPOSE 80

CMD ["node", "dist"]
