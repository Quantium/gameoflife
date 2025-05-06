# Use Node.js LTS version as base image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Install a simple HTTP server to serve static files
RUN npm install -g http-server

# Expose port 8080
EXPOSE 8080

# Start the server
CMD ["npm", "start"] 