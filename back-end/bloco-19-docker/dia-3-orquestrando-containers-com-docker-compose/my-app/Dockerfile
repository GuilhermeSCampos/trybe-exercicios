FROM nginx:1.21-alpine

WORKDIR /site

COPY . /site/layouts/index.html

RUN npm install

EXPOSE 8080

ENTRYPOINT ["npm", "start"]

CMD ["httpd-foreground"]