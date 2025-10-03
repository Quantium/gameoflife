FROM node:18-alpine

# Set working directory
WORKDIR /workspace

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 8000

# Default command
CMD ["npm", "start"]
