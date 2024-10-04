##  Diseño y Programación de Software Multiplataforma DPS104 G02T
### INVESTIGACIÓN APLICADA 2
### INTEGRANTES

Rodrigo Humberto Aguilera Mendoza AM201939
Ingeniería en Ciencias de la Computación
Universidad Don Bosco

# Torneo Fútbol API

Esta es una API para gestionar equipos de fútbol, construida con Node.js y MongoDB. Esta API permite crear, leer, actualizar y eliminar información sobre equipos de fútbol.

## Requisitos

- Docker
- Docker Compose


## Configuración del Proyecto

1. **Clonar el Repositorio**

   Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/rodrigoamdll/torneo-futbol-api.git
   cd torneo-futbol-api

2. **Construir la imagen docker**
    docker-compose build

3. **Ejecuta la API**
    docker-compose up

4. **Probar la API**
 Puedes obtener una lista de todos los equipos realizando una solicitud GET a la siguiente URL utilizando POSTMAN
    GET http://localhost:3000/api/equipos

## Documentación Adicional

[Presentación](./Investigación%20Aplicada%202.pdf)





