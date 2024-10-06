#!/bin/bash
cd /var/www/vendingapp
# Stop any existing PM2 processes
pm2 stop all || true
# Start the backend server using PM2
pm2 start server/server.js