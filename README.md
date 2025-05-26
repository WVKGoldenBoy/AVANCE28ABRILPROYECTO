#  La Tienda Agrícola Cali

Aplicación web desarrollada con **HTML, CSS y JavaScript**, orientada a la gestión de una tienda de maquinaria agrícola. Permite registrar, visualizar, buscar y eliminar productos, todo con almacenamiento en `localStorage`.

---

##  Funcionalidades principales

-  **Registro de productos:** desde `registrar.html` con nombre, categoría, imagen, código, marca, precio, stock y especificaciones técnicas por categoría.
-  **Visualización de productos:** en `productos.html`, todos se muestran como tarjetas limpias y responsive.
-  **Paginación inteligente:** los productos se dividen por páginas de 14 productos cada una.
-  **Filtros de búsqueda avanzados:** en `busqueda.html`, se puede buscar por:
  - Nombre del producto
  - Categoría
  - Marca
  - Precio máximo
-  **Redirección al producto exacto:** desde los resultados de búsqueda, al hacer clic te lleva directo al producto en `productos.html`.
-  **Eliminación por tarjeta:** cada tarjeta cuenta con un botón 🗑️ para eliminar productos específicos.
-  **Diseño responsive:** se adapta perfectamente a celulares, tablets y pantallas grandes.

---
##  Almacenamiento

- Los productos se guardan en **`localStorage`** del navegador.
- Puedes precargar productos usando `productosData.js`.
- Los datos permanecen aunque se cierre el navegador (hasta ser eliminados).

---

##  Tecnologías utilizadas

-  **HTML5**: estructura semántica.
-  **CSS3**: diseño personalizado, estilos responsive y animaciones.
-  **JavaScript (ES6)**: manejo de DOM, eventos, almacenamiento local, paginación y filtros.
-  **Google Fonts – Poppins**
-  **Bootstrap Icons**: íconos en los botones.

---

##  Estructura del proyecto

```bash
 proyecto/
│
├── inicio html.html
├── paginas/
├── registrar.html
├── busqueda.html
├── productos.htm
├── contacto.htm
│
├── css/
    ├── busqueda.css
    ├── contacto.css
    ├── header.css
    ├── producto.css
    ├── registro.css 
│   └── styles.css
│
├── js/
│   ├── productos.js          
│   ├── registrar.js          
│   ├── busqueda.js
    ├── scripts.js          
│   └── productosData.js        
│
├── img/
│   └── categorias/
│       ├── fumigadoras/
│       ├── motobombas/
│       ├── generadores/
│       ├── guadañas/
│       └── motosierras/
