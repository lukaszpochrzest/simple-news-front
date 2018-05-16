FROM nginx:1.13
COPY ./dist/simple-news-front/ /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
