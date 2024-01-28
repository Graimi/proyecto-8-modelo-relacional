# Modelo relacional

## PROYECTO 8: Modelo relacional - EN PROCESO

Crear otro servidor, pero esta vez con dos modelos de datos relacionados entre sí.

### ENDPOINTS:

https://localhost:4001/api

Endpoints para los artefactos de ciencia ficción<br>

| HTTP Request | Endpoint            | Descripción                                    |
| ------------ | ------------------- | ---------------------------------------------- |
| GET          | /scifiartifacts     | Muestra todos los artefactos                   |
| GET          | /scifiartifacts/:id | Identifica un artefacto por su id y lo muestra |
| POST         | /scifiartifacts     | Crea un nuevo artefacto                        |
| PUT          | /scifiartifacts/:id | Edita un artefacto                             |
| DELETE       | /scifiartifacts/:id | Borra un artefacto                             |

Endpoints para las franquicias<br>

| HTTP Request | Endpoint        | Descripción                                      |
| ------------ | --------------- | ------------------------------------------------ |
| GET          | /franchises     | Muestra todas las franquicias                    |
| GET          | /franchises/:id | Identifica una franquicia por su id y la muestra |
| POST         | /franchises     | Crea una nueva franquicia                        |
| PUT          | /franchises/:id | Edita una franquicia                             |
| DELETE       | /franchises/:id | Borra una franquicia                             |

Endpoints para las relaciones<br>

| HTTP Request | Endpoint                     | Descripción                                                                       |
| ------------ | ---------------------------- | --------------------------------------------------------------------------------- |
| GET          | /populated/scifiartifact/:id | Identifica un artefacto por su id y muestra las franquicias en las que aparece    |
| GET          | /populated/franchise/:id     | Identifica una franquicia por su id y muestra los artefactos que aparecen en ella |
| PUT          | /populated/scifiartifact/:id | Edita con que franquicia guarda relación el artefacto a través de body params     |
| PUT          | /populated/franchise/:id     | Edita con que artefactos guarda relación una franquicia a través de body params   |

|

### MODELOS:

Modelo para los artefactos de ciencia ficción

```jsx
const SciFiArtifacts = {
  _id: 'id del artefacto',
  name: 'Nombre del artefacto',
  description: 'Descripción del artefacto y sus características',
  type: 'Tipo de artefacto',
  powers: 'Poderes o funcionalidades especiales del artefacto',
  franchiseId: 'ID de la franquicia a la que pertenece',
};
```

Modelo para las franquicias

```jsx
const Franchises = {
  _id: 'id de la franquicia',
  name: 'Nombre de la franquicia',
  genre: 'Género de la franquicia',
  establishedYear: 'Año de establecimiento de la franquicia',
  artifacts: ['Array de ID de artefactos pertenecientes a la franquicia'],
};
```

## Criterios de aceptación

<ul>
[✅]  El servidor arranca en el puerto 4001 cuando lanzo el comando `npm run start`.<br>
[✅]  El servidor se conecta con una base de datos MongoDB en mi equipo local que corre en el puerto 27017.<br>
[✅]  En el README del proyecto están definidos los endpoints que tengo a mi disposición.<br>
<ul>
- [✅]  Hay un endpoint GET que me permite traer todos los documentos de un tipo de colección.<br>
- [✅]  Hay un endpoint GET que me permite traer un solo elemento por su id de una colección.<br>
- [✅]  Hay un endpoint POST que me permite crear un nuevo elemento en la colección correspondiente.<br>
- [✅]  Hay un endpoint PUT que me permite crear editar un elemento por su id en una colección.<br>
- [✅]  Hay un endpoint DELETE que me permite borrar un elemento por su id en una colección.<br>
</ul>
[✅] El servidor no se rompe si pido una URL no existente, es decir, dispone de un middleware para capturar errores 404 o rutas no encontradas.<br>
[✅] Los códigos de red son correctos cuando hago peticiones (200 y 201 para objetos creados).<br>
[✅]  De cara a la relación entre modelos, en el README tendré explicados los endpoints que debo consumir para tener acceso a:<br>
<ul>
- [✅] Un endpoint GET que me permite recuperar un elemento de la colección A y traer los datos de los elementos de la colección B con los que esté relacionado.<br>
- [✅] Un endpoint GET que me permite recuperar un elemento de la colección B y los datos de un elemento de la colección A con el que esté relacionado.<br>
- [✅] Un endpoint PUT que me permite añadir (o quitar si ya existe) un nuevo elemento B al array de elementos relacionado de un documento de la colección A.<br>
- [✅] Un enpoint PUT que me permite cambiar o eliminar el campo de un documento de la colección B que apunta a un elemento de la colección A con el que está relacionado.<br>
</ul>
</ul>

## Organización

<ul>
<li> [] README </li>
[✅] Añadir el endpoint correcto<br>
[✅] Añadir los modelos correctos<br>
[] Revisar que es correcto<br>
<li> [✅] index → Almacenar archivos que actúan como puntos de entrada o partes del sistema</li>
[✅] Middleware declarado<br>
[✅] Middleware para errores declarado<br>
[✅] Puerto establecido <br>
[✅] Enlaces realizados<br>
<li> [✅] config → Archivos con configuraciones</li>
[✅] Configuración establecida<br>
[✅] Si no funciona recuerda probar la otra ruta<br>
<li> [✅] models → Modelos para representar la estructura de los datos</li>
[✅] Modelo artefactos<br>
[✅] Modelo franquicias<br>
<li> [] repositories → Conjunto de funciones con las querys para traer la información</li>
[✅] GET all artifacts<br>
[✅] GET one artifacts<br>
[✅] POST artifacts<br>
[✅] PUT artifacts<br>
[✅] DELETE artifacts<br>
[✅] GET all franchises<br>
[✅] GET one franchises<br>
[✅] POST franchises<br>
[✅] PUT franchises<br>
[✅] DELETE franchises<br>
[✅] GET sciFiartifact and franchise related<br>
[✅] GET franchise and sciFiartifacts related<br>
[✅] PUT to change the franchise's sciFiartifact<br>
[✅] PUT to update SciFiArtifact's Franchise<br>
[] Enlaces realizados<br>
<li> [] controllers → Conjunto de funcionalidades</li>
[✅] GET all artifacts<br>
[✅] GET one artifacts<br>
[✅] POST artifacts<br>
[✅] PUT artifacts<br>
[✅] DELETE artifacts<br>
[✅] GET all franchises<br>
[✅] GET one franchises<br>
[✅] POST franchises<br>
[✅] PUT franchises<br>
[✅] DELETE franchises<br>
[✅] GET sciFiartifact and franchise related<br>
[✅] GET franchise and sciFiartifacts related<br>
[✅] PUT to change the franchise's sciFiartifact<br>
[✅] PUT to update SciFiArtifact's Franchise<br>
[] Enlaces realizados<br>
<li> [] routes → Enrutado de la aplicación</li>
[✅] index con el router scifiartifacts establecido<br>
[✅] index con el router franchises establecido<br>
[✅] index con el router populated establecido<br>
[✅] scifiartifacts endpoints declarados<br>
[✅] franchises endpoints declarados<br>
[] populated endpoints declarados<br>
[] Enlaces realizados<br>
</ul>
