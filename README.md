# Modelo relacional

## PROYECTO 8: Modelo relacional - EN PROCESO

Crear otro servidor, pero esta vez con dos modelos de datos relacionados entre sí.

### Endpoints:

| HTTP Request | Endpoint           | Descripción                                    |
| ------------ | ------------------ | ---------------------------------------------- |
| GET          | /scifiartifacts    | Muestra todos los artefactos                   |
| GET          | /scifiartifacts/id | Identifica un artefacto por su id y lo muestra |
| POST         | /scifiartifacts    | Crea un nuevo artefacto                        |
| PUT          | /scifiartifacts/id | Edita un artefacto                             |
| DELETE       | /scifiartifacts/id | Borra un artefacto                             |


### MODELOS:

Primer modelo
```jsx
const sciFiArtifacts = {
  _id: 'id del artefacto',
  name: 'Nombre del artefacto',
  universe: 'Universo al que pertenece',
  description: 'Descripción del artefacto y sus características',
  type: 'Tipo de artefacto',
  powers: 'Poderes o funcionalidades especiales del artefacto',
};
```
Segundo modelo
```jsx
const  = {

};
```

## Criterios de aceptación

<ul>
[]  El servidor arranca en el puerto 4001 cuando lanzo el comando `npm run start`.<br>
[]  El servidor se conecta con una base de datos MongoDB en mi equipo local que corre en el puerto 27017.<br>
[]  En el README del proyecto están definidos los endpoints que tengo a mi disposición.<br>
<ul>
- []  Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.<br>
- []  Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.<br>
- []  Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.<br>
- []  Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.<br>
- []  Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.<br>
</ul>
[] El servidor no se rompe si pido una URL no existente, es decir, dispone de un middleware para capturar errores 404 o rutas no encontradas.<br>
[] Los códigos de red son correctos cuando hago peticiones (200 y 201 para objetos creados).<br>
[]  De cara a la relación entre modelos, en el README tendré explicados los endpoints que debo consumir para tener acceso a:<br>
<ul>
- [] Un endpoint GET que me permite recuperar un elemento de la colección A y traer los datos de los elementos de la colección B con los que esté relacionado.<br>
- [] Un endpoint GET que me permite recuperar un elemento de la colección B y los datos de un elemento de la colección A con el que esté relacionado.<br>
- [] Un endpoint PUT que me permite añadir (o quitar si ya existe) un nuevo elemento B al array de elementos relacionado de un documento de la colección A.<br>
- [] Un enpoint PUT que me permite cambiar o eliminar el campo de un documento de la colección B que apunta a un elemento de la colección A con el que está relacionado.<br>
</ul>
</ul>

## Organización

<ul>
<li> [] README </li>
[] Añadir el endpoint correcto<br>
[] Añadir los modelos correctos<br>
<li> [] index → Almacenar archivos que actúan como puntos de entrada o partes del sistema</li>
[] Middleware declarado<br>
[] Middleware para errores declarado<br>
[] Puerto establecido <br>
[] Enlaces realizados<br>
<li> [] config → Archivos con configuraciones</li>
[] Configuración establecida<br>
[] Si no funciona recuerda probar la otra ruta<br>
<li> [] models → Modelos para representar la estructura de los datos</li>
[] Modelo establecido<br>
<li> [] repositories → Conjunto de funciones con las querys para traer la información</li>
[] GET all<br>
[] GET one<br>
[] POST<br>
[] PUT<br>
[] DELETE <br>
[] Enlaces realizados<br>
<li> [] controllers → Conjunto de funcionalidades</li>
[] GET all<br>
[] GET one<br>
[] POST<br>
[] PUT<br>
[] DELETE <br>
[] Enlaces realizados<br>
<li> [] routes → Enrutado de la aplicación</li>
[] index con el router establecido<br>
[] archivo con los endpoints declarados<br>
[] Enlaces realizados<br>
</ul>
