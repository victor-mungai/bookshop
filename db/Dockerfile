FROM mysql:8.0.33
LABEL "Author"="mungai"

ENV MYSQL_ROOT_PASSWORD="1234" 
 #This is for demo purposes only in prod i would use secrets configured in a docker compose or set them as environment variables in a pod spec
ENV MYSQL_DATABASE="bookshop"
ADD db/sql_dump docker-entrypoint-initdb.d/db_backup.sql
EXPOSE 3306

 