# Intermediate docker image to build the bundle in and install dependencies
FROM node:19

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json over in the intermedate "build" image
COPY ./package.json ./
COPY ./package-lock.json ./

# Install the dependencies
# Clean install because we want to install the exact versions
RUN npm install

# Copy the source code into the build image
COPY . .

# Start the application
CMD [ "npm", "start"]