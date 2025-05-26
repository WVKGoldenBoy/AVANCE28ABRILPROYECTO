document.addEventListener('DOMContentLoaded', () => {
  const contenedorProductos = document.getElementById('contenedorProductos');
  const productoSeleccionado = localStorage.getItem('productoSeleccionado');
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  const productosPorPagina = 15;
  let paginaActual = 1;

  if (productoSeleccionado) {
  const index = productos.findIndex(p => p.codigo === productoSeleccionado);
  if (index !== -1) {
    paginaActual = Math.floor(index / productosPorPagina) + 1;
  }
}

  function mostrarProductos(pagina) {
    contenedorProductos.innerHTML = "";

    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPagina = productos.slice(inicio, fin);

    productosPagina.forEach(producto => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-producto');

      const imagen = document.createElement('img');
      imagen.src = `../img/${producto.imagen}`;
      imagen.alt = producto.nombre;
      imagen.onerror = () => imagen.src = '../img/no-disponible.png';

      const contenido = document.createElement('div');
      contenido.classList.add('contenido');

      const nombre = document.createElement('div');
      nombre.classList.add('nombre-producto');
      nombre.textContent = producto.nombre;

      const precio = document.createElement('div');
      precio.classList.add('precio-producto');
      precio.textContent = `$${producto.precio.toLocaleString()}`;

      let especificacionesHTML = '';
      if (producto.especificaciones) {
        for (const key in producto.especificaciones) {
          especificacionesHTML += `
            <div class="especificacion"><strong>${key.replace(/_/g, ' ')}:</strong> ${producto.especificaciones[key]}</div>
          `;
        }
      }
      const especificaciones = document.createElement('div');
      especificaciones.innerHTML = especificacionesHTML;

      contenido.appendChild(nombre);
      contenido.appendChild(precio);
      contenido.appendChild(especificaciones);

      tarjeta.appendChild(imagen);
      tarjeta.appendChild(contenido);

      if (productoSeleccionado && producto.codigo === productoSeleccionado) {
        tarjeta.style.border = '3px solid #4CAF50';
        tarjeta.scrollIntoView({ behavior: 'smooth', block: 'center' });
        localStorage.removeItem('productoSeleccionado');
      }

      const btnEliminar = document.createElement('button');
      btnEliminar.innerHTML = "🗑️";
      btnEliminar.className = "btn-eliminar";
      btnEliminar.title = "Eliminar producto";
      btnEliminar.onclick = () => {
        if (confirm(`¿Seguro que deseas eliminar "${producto.nombre}"?`)) {
          const nuevosProductos = productos.filter(p => p.codigo !== producto.codigo);
          localStorage.setItem('productos', JSON.stringify(nuevosProductos));
          location.reload();
        }
      };
      tarjeta.appendChild(btnEliminar);

      contenedorProductos.appendChild(tarjeta);
    });

    mostrarPaginacion();
  }

  function mostrarPaginacion() {
    const paginacion = document.getElementById('paginacion');
    paginacion.innerHTML = "";

    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    const btnAnterior = document.createElement('button');
    btnAnterior.textContent = "Anterior";
    btnAnterior.disabled = paginaActual === 1;
    btnAnterior.onclick = () => {
      paginaActual--;
      mostrarProductos(paginaActual);
      document.getElementById('contenedorProductos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const btnSiguiente = document.createElement('button');
    btnSiguiente.textContent = "Siguiente";
    btnSiguiente.disabled = paginaActual === totalPaginas;
    btnSiguiente.onclick = () => {
      paginaActual++;
      mostrarProductos(paginaActual);
      document.getElementById('contenedorProductos').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const texto = document.createElement('span');
    texto.textContent = `Página ${paginaActual} de ${totalPaginas}`;

    paginacion.appendChild(btnAnterior);
    paginacion.appendChild(texto);
    paginacion.appendChild(btnSiguiente);
  }

  mostrarProductos(paginaActual);

  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm("¿Seguro que deseas borrar todos los productos y recargar la base?")) {
        localStorage.removeItem('productos');
        location.reload();
      }
    });
  }
});