FROM nginx:latest
RUN  mkdir -p /run/nginx
COPY ./nginx.conf.conf /etc/nginx/ 
CMD ["/bin/sh" , "-c" , "envsubst < /etc/nginx/nginx.conf.conf > /etc/nginx/nginx.conf && exec nginx -g 'daemon off;'"]