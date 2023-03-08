# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the rest of the application files to /app
COPY . .

# Expose port 8080 for the server to listen on
EXPOSE 8080

# Start the server
CMD [ "node", "server" ]
