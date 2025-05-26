document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('busqueda-form');
  const loading = document.getElementById('loading');
  const nombreInput = document.getElementById('filtro-nombre');
  const categoriaInput = document.getElementById('filtro-categoria');
  const precioInput = document.getElementById('filtro-precio');
  const marcaInput = document.getElementById('filtro-marca');
  const limpiarBtn = document.getElementById('btn-limpiar');

  const resultadosContainer = document.createElement('div');
  resultadosContainer.id = 'resultados';
  document.querySelector('.busqueda-container').appendChild(resultadosContainer);

  const productos = JSON.parse(localStorage.getItem('productos')) || [];

  if (categoriaInput.options.length === 1) {
    const categorias = [...new Set(productos.map(p => p.categoria))];
    categorias.forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
      categoriaInput.appendChild(option);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    resultadosContainer.innerHTML = '';
    loading.style.display = 'block';

    setTimeout(() => {
      const nombreFiltro = nombreInput.value.trim().toLowerCase();
      const categoriaFiltro = categoriaInput.value;
      const precioFiltro = parseFloat(precioInput.value);
      const marcaFiltro = marcaInput.value.trim().toLowerCase();

      let resultados = productos.filter(p => {
        const cumpleNombre = nombreFiltro === '' || p.nombre.toLowerCase().includes(nombreFiltro);
        const cumpleCategoria = categoriaFiltro === '' || p.categoria === categoriaFiltro;
        const cumplePrecio = isNaN(precioFiltro) || p.precio <= precioFiltro;
        const cumpleMarca = marcaFiltro === '' || (p.marca && p.marca.toLowerCase().includes(marcaFiltro));
        return cumpleNombre && cumpleCategoria && cumplePrecio && cumpleMarca;
      });

      mostrarResultados(resultados);
      loading.style.display = 'none';
    }, 2000);
  });

  limpiarBtn.addEventListener('click', () => {
    form.reset();
    resultadosContainer.innerHTML = '';
    loading.style.display = 'none';
  });

  function mostrarResultados(productos) {
    if (productos.length === 0) {
      resultadosContainer.innerHTML = '<p>No se encontraron resultados.</p>';
      return;
    }

    let pagina = 1;
    const porPagina = 10;
    const totalPaginas = Math.ceil(productos.length / porPagina);

    const tabla = document.createElement('table');
    tabla.classList.add('tabla-resultados');

    const cabecera = `
      <thead><tr>
        <th>Nombre</th><th>Imagen</th><th>Categoría</th><th>Precio</th><th>Marca</th><th>Stock</th>
      </tr></thead>
    `;
    tabla.innerHTML = cabecera;
    const cuerpo = document.createElement('tbody');
    tabla.appendChild(cuerpo);
    resultadosContainer.appendChild(tabla);

    const paginacion = document.createElement('div');
    paginacion.classList.add('paginacion');
    resultadosContainer.appendChild(paginacion);

    const btnRegresar = document.createElement('button');
    btnRegresar.textContent = 'Volver a productos';
    btnRegresar.className = 'btn';
    btnRegresar.onclick = () => window.location.href = 'productos.html';
    resultadosContainer.appendChild(btnRegresar);

    function renderPagina(p) {
      cuerpo.innerHTML = '';
      const inicio = (p - 1) * porPagina;
      const fin = p * porPagina;
      const paginaProductos = productos.slice(inicio, fin);
      paginaProductos.forEach(p => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td data-label="Nombre">${p.nombre}</td>
  <td data-label="Imagen"><img src="../img/${p.imagen}" alt="${p.nombre}" width="80" onerror="this.src='../img/no-disponible.png'"></td>
  <td data-label="Categoría">${p.categoria}</td>
  <td data-label="Precio">$${p.precio.toLocaleString()}</td>
  <td data-label="Marca">${p.marca}</td>
  <td data-label="Stock">${p.stock}</td>
`;
fila.style.cursor = "pointer";
fila.addEventListener('click', () => {
  localStorage.setItem('productoSeleccionado', p.codigo); // o p.nombre
  window.location.href = 'productos.html';
});
        cuerpo.appendChild(fila);
      });
    }

    function renderPaginacion() {
      paginacion.innerHTML = '';
      for (let i = 1; i <= totalPaginas; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = 'btn btn-pagina';
        if (i === pagina) btn.classList.add('activo');
        btn.onclick = () => {
          pagina = i;
          renderPagina(pagina);
          renderPaginacion();
        };
        paginacion.appendChild(btn);
      }
    }

    renderPagina(pagina);
    renderPaginacion();
  }
});
