# Utilizar la imagen base de Node.js
FROM node:18

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias necesarias
RUN npm install

# Copiar el resto del código fuente al contenedor
COPY ./src ./src

# Exponer el puerto en el que correrá la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/app.js"]
