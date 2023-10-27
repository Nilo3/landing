# Usa la imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala npm globalmente en una versión compatible
RUN npm install -g npm@9

# Instala las dependencias forzando la resolución de conflictos
RUN npm install

# Copia todo el código de la aplicación
COPY . .

# Expone el puerto utilizado por la aplicación
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "start"]