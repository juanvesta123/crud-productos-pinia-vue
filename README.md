# CRUD de productos con Vue 3

Aplicación SPA para registrar, editar, eliminar y consultar productos. El carrito se maneja por separado y muestra el total del pedido.

## Integrantes

- Nucamendi Diaz Juan Manuel
- De los Santos Lopez Rubi Esmeralda
- Edson S. Jiménez Silvestre

## Tecnologías

- Vue 3
- Vue Router
- Pinia
- Vite

## Rutas

| Ruta | Uso |
| --- | --- |
| `/#/` | Inicio |
| `/#/productos` | Lista de productos |
| `/#/productos/crear` | Registro de producto |
| `/#/productos/:id` | Edición de producto |
| `/#/carrito` | Resumen del carrito |

## Ejecutar el proyecto

```sh
npm install
npm run dev
```

## Compilar

```sh
npm run build
npm run preview
```

Los datos y las acciones para productos están en `src/stores/products.js`. El carrito está en `src/stores/cart.js`. Las vistas usan esos stores sin modificar los datos directamente.

## Publicación

El workflow de `.github/workflows/deploy.yml` compila el proyecto y publica la carpeta `dist` en GitHub Pages.

## Capturas de código

Para abrir la consola de evidencias en Windows:

```sh
npm run evidence:terminal
```

La pantalla muestra la salida real de `Get-Content` de los archivos seleccionados con Windows PowerShell. Solo se ejecutan archivos de lectura incluidos en la lista del script y se abre en `localhost`.
