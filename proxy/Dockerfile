FROM nginx:alpine
COPY proxy/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
## using nginx as a proxy to prevent CORS issues when the frontend makes requests to the backend.