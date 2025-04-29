document.addEventListener('DOMContentLoaded', () => {
  
    const contenedorProductos = document.getElementById('contenedorProductos');
  
    // Cargar productos desde localStorage
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
  
    // Generar tarjetas
    productosGuardados.forEach(producto => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-producto');
  
      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="nombre-producto">${producto.nombre}</div>
        <div class="precio-producto">$${producto.precio.toLocaleString()}</div>
        <button class="boton-agregar">Agregar</button>
      `;
  
      contenedorProductos.appendChild(tarjeta);
    });
  
  });
  