# Use the official Node.js image as the base image
FROM node:22-alpine

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb (if it exists)
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of your application code
COPY . .

# Build the Nuxt application
RUN bun run build

# Expose the port that your app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["bun", "run", "dev"]