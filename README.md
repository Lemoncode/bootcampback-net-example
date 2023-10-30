# Ejemplo front para la gestión de libros y autores

## Introducción 

Este proyecto es una aplicación web que nos permite ver un listado de libros, autores y sus detalles. Si estamos logados como administradores podemos gestionar los libros y autores.

## Instalación del proyecto:

```bash
npm install
```

## Ejecución del proyecto:

```bash
npm start
```

Podemos acceder a la aplicación en la siguiente url: [http://localhost:8080/](http://localhost:8080/)

## Partes de la aplicación:

La aplicación se compone de dos partes:

- Una parte pública donde los usuarios pueden ver el listado de libros, autores y sus detalles.
- Una parte privada donde los administradores pueden gestionar los libros, autores y sus detalles.

La parte de los autores no está implementada todavía.

Existe una parte de login que accedemos en login, que lo único que requiere es tener cualquier correo con @ y cualquier contraseña. Una vez hecho esto nos redirige a la parte privada de la aplicación.

Nos navegará a un dashboard donde podremos ver el listado de libros y autores. Ahora mismo solo se puede acceder al listado de libros. 

Tenemos una opción añadir un nuevo libro, que nos redirige a un formulario donde podemos añadir un nuevo libro. En el listado de libros tenemos la opción de editar y eliminar un libro. 



