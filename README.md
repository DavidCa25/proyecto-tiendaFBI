# Proyecto CRUD con Express y MySQL

Este proyecto es una aplicación CRUD utilizando Express con MySQL en el backend. Permite gestionar entidades como clientes, proveedores, ventas, empleados, compras e inventarios.

# Tecnologías Utilizadas

Backend: Express con MySQL

Base de datos: MySQL

Instalación y Configuración

# Requisitos Previos

Asegúrate de tener instalados:

Node.js y npm

MySQL Server

# Clonar el Repositorio

git clone https://github.com/tu-repositorio.git
cd tu-repositorio

Configuración del Backend

Instalar dependencias:

npm install

Configurar la base de datos:

Crear la base de datos tienda en MySQL.

Configurar el usuario y la contraseña en db.createConnection dentro del archivo server.js.

Iniciar el servidor:

node server.js

El backend correrá en http://localhost:3001.

Endpoints del Backend

El backend expone los siguientes endpoints para cada entidad:

Obtener todos los registros

GET /{tabla}

Ejemplo:

GET /clientes

# Agregar un nuevo registro

POST /{tabla}

Cuerpo JSON:

{
  "nombre": "Ejemplo",
  "email": "ejemplo@correo.com"
}

# Actualizar un registro por ID

PUT /{tabla}/:id

# Cuerpo JSON:

{
  "nombre": "Nuevo Nombre"
}

# Eliminar un registro por ID

DELETE /{tabla}/:id

Contacto

Para consultas o contribuciones, contáctame en [tu correo o perfil de GitHub].