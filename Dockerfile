# Use an official PHP runtime as a parent image
FROM php:7.4-apache

# Set working directory
WORKDIR /var/www/html

# Install necessary packages
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        curl \
        git \
        libcurl4-openssl-dev \
        libmcrypt-dev \
        libicu-dev \
        libxml2-dev \
        libzip-dev \
        unzip \
        vim \
        wget \
        zlib1g-dev && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js and NPM
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs

# Install SASS
RUN npm install -g sass

# Enable required Apache modules
RUN a2enmod rewrite

# Copy the source code into the container
COPY . /var/www/html

# Expose the web server port
EXPOSE 3000

# Start Apache web server
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
