FROM kstaken/apache2
LABEL name "my-docker-deployment"
COPY /my-app/* /var/www
EXPOSE 80
CMD ["/usr/sbin/apache2", "-D", "FOREGROUND"]