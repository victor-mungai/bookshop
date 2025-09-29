FROM php:8.1-apache
RUN apt-get update \
  && docker-php-ext-install mysqli pdo pdo_mysql \
   && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/bookshop
COPY /api .

COPY apache/bookshop.conf /etc/apache2/sites-available/bookshop.conf
RUN a2enmod  rewrite headers && a2dissite 000-default && a2ensite bookshop
EXPOSE 80
CMD  ["apache2-foreground"]

