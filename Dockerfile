# Use Node.js
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including dev)
RUN npm ci

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Install a simple server
RUN npm install -g serve

# Run the app
CMD ["serve", "-s", "dist", "-l", "3000"]