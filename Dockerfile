FROM mysql:8.0

COPY ./database/my.cnf /etc/mysql/my.cnf
COPY ./database/init.sql /docker-entrypoint-initdb.d/

RUN chmod a+x /docker-entrypoint-initdb.d/init.sql