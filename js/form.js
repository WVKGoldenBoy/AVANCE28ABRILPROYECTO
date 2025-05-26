document.addEventListener('DOMContentLoaded', () => {
        const formRegistro = document.getElementById('formRegistro');
        const nombreImagen = document.getElementById('imagen').value.trim().replace(/\\/g, '/');
        const categoriaSelect = document.getElementById('categoria');
        const camposDinamicos = document.getElementById('camposDinamicos');

        const camposPorCategoria = {
            generadores: ['Potencia', 'Fases', 'Capacidad del Tanque', 'Tipo de Arranque'],
            guadanas: ['Potencia', 'RPM', 'CC', 'Tipo de Motor'],
            fumigadoras: ['Capacidad (L)', 'Tipo de Bomba', 'Presión (psi)'],
            motobombas: ['Caudal (L/min)', 'Altura Máxima (m)', 'Tipo de Motor'],
            motosierras: ['Longitud de Espada', 'Potencia', 'Tipo de Cadena']
        };

        categoriaSelect.addEventListener('change', () => {
            const categoria = categoriaSelect.value;
            camposDinamicos.innerHTML = '';
            camposDinamicos.style.display = 'none';

            if (camposPorCategoria[categoria]) {
                camposPorCategoria[categoria].forEach(campo => {
                    const label = document.createElement('label');
                    label.textContent = campo + ':';
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.name = campo.toLowerCase().replace(/ /g, '_');
                    camposDinamicos.appendChild(label);
                    camposDinamicos.appendChild(input);
                });
                camposDinamicos.style.display = 'block';
            }
        });
        formRegistro.addEventListener('submit', function(e) {
    e.preventDefault();

    const nuevoProducto = {
      nombre: document.getElementById('nombre').value.trim(),
      categoria: categoriaSelect.value,
      imagen: document.getElementById('imagen').value.trim(),
      codigo: document.getElementById('codigo').value.trim(),
      precio: parseFloat(document.getElementById('precio').value),
      marca: document.getElementById('marca').value.trim(),
      stock: parseInt(document.getElementById('stock').value),
      especificaciones: {}
    };

    const inputsDinamicos = camposDinamicos.querySelectorAll('input');
    inputsDinamicos.forEach(input => {
      nuevoProducto.especificaciones[input.name] = input.value.trim();
    });

    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
    productosGuardados.push(nuevoProducto);
    localStorage.setItem('productos', JSON.stringify(productosGuardados));

    alert('¡Producto registrado y guardado exitosamente!');
setTimeout(() => {
  window.location.href = 'productos.html';
}, 500);

    this.reset();
    camposDinamicos.innerHTML = '';
    camposDinamicos.style.display = 'none';
  });
});