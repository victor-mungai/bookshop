FROM mysql:8.0.33
LABEL "Author"="mungai"

ENV MYSQL_DATABASE="bookshop"
ADD ./sql_dump docker-entrypoint-initdb.d/db_backup.sql
EXPOSE 3306

 
