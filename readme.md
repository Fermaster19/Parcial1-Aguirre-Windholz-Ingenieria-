# Sistema de Inventario de Perfumes

## Integrantes

- Nombre y Apellido Integrante 1
- Nombre y Apellido Integrante 2

---

## Descripción del Proyecto

Este proyecto consiste en un MVP (Producto Mínimo Viable) para la gestión de un inventario de perfumes.

El sistema permite:

- Agregar perfumes
- Visualizar perfumes cargados
- Ordenar perfumes por precio
- Ordenar perfumes por stock
- Gestionar información mediante una interfaz HTML simple

El objetivo es aplicar conceptos de Ingeniería de Software utilizando arquitectura MVC, patrones de diseño y testing unitario.

---

# Arquitectura MVC

El proyecto fue desarrollado siguiendo el patrón MVC (Modelo - Vista - Controlador), separando responsabilidades para mejorar la organización y mantenimiento del código.

## Modelo (Model)

Se encarga de los datos y lógica de negocio.

Clases:

- `Perfume`
- `Inventario`

Funciones:

- Crear perfumes
- Almacenar perfumes
- Obtener perfumes
- Aplicar ordenamientos

---

## Vista (View)

Se encarga de mostrar información al usuario mediante la interfaz HTML.

Clase:

- `Vista`

Funciones:

- Mostrar lista de perfumes
- Actualizar información en pantalla

---

## Controlador (Controller)

Actúa como intermediario entre Modelo y Vista.

Clase:

- `Controlador`

Funciones:

- Agregar perfumes
- Ejecutar estrategias
- Actualizar la vista

---

# Patrones de Diseño Implementados

## Singleton

Implementado en:

```js
class Inventario
```

### Función

Garantiza una única instancia del inventario dentro del sistema.

### Problema que resuelve

Evita la creación de múltiples inventarios distintos y mantiene centralizados los datos.

---

## Strategy

Implementado mediante:

- `OrdenPrecio`
- `OrdenStock`

### Función

Permite cambiar dinámicamente el algoritmo utilizado para ordenar perfumes.

### Problema que resuelve

Evita modificar el código principal cada vez que se agrega un nuevo criterio de ordenamiento.

Ejemplos:

- Ordenar por precio
- Ordenar por stock

---

# Testing Unitario

Se utilizó Jest para validar el funcionamiento del sistema.

Se realizaron pruebas sobre:

- Creación de perfumes
- Agregado de perfumes
- Validación de datos
- Funcionamiento general del inventario

---

# Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Jest
- Git
- GitHub

---

# Estructura del Proyecto

```txt
inventario-perfumes/
│
├── index.html
├── style.css
├── app.js
├── tests/
│   └── inventario.test.js
├── package.json
└── README.md
```

---

# Instrucciones de ejecución

## Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## Instalar dependencias

```bash
npm install
```

---

## Ejecutar proyecto

Abrir el archivo:

```txt
index.html
```

o utilizar:

```bash
start index.html
```

---

## Ejecutar tests

```bash
npm test
```

---

# Flujo de trabajo Git utilizado

Para garantizar el trabajo colaborativo se utilizó GitHub mediante ramas independientes.

Cada integrante trabajó en una rama propia:

```bash
git checkout -b rama-nombre-integrante
```

Proceso seguido:

1. Crear rama personal
2. Realizar cambios
3. Hacer commit de avances

```bash
git add .
git commit -m "Descripción del cambio"
git push origin rama-nombre-integrante
```

4. Integrar cambios mediante Merge hacia la rama principal

```bash
git checkout main
git merge rama-nombre-integrante
```

No se realizaron cambios directamente sobre la rama `main`.

---

# Conclusión

El proyecto permitió aplicar conceptos de arquitectura de software y trabajo colaborativo mediante Git, implementando un sistema simple y funcional siguiendo buenas prácticas de desarrollo.