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

# Build the React app
RUN npm run build

# Expose port 3000 for the server to listen on
EXPOSE 3000

# Start the server
CMD [ "npm", "start" ]
