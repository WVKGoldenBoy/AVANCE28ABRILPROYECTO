const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const navigation = document.getElementById('navigation');
const registrarBtn = document.getElementById('registrar-page');
const productos = [];


abrir.addEventListener('click', () => {
  navigation.classList.add('active');
  abrir.style.display = 'none';    // ocultar hamburguesa
  cerrar.style.display = 'block';  // mostrar X
});

cerrar.addEventListener('click', () => {
  navigation.classList.remove('active');
  cerrar.style.display = 'none';   // ocultar X
  abrir.style.display = 'block';   // mostrar hamburguesa
});

registrarBtn.addEventListener('click', () => {
  window.location.href = 'paginas/registrar.html';
});

// Esperar que cargue todo el DOM (opcional pero recomendado)
document.addEventListener('DOMContentLoaded', () => {
  
  const formRegistro = document.getElementById('formRegistro');

  formRegistro?.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar recarga

    // Crear el nuevo producto
    const nuevoProducto = {
      nombre: document.getElementById('nombre').value.trim(),
      categoria: document.getElementById('categoria').value,
      imagen: document.getElementById('imagen').value.trim(),
      codigo: document.getElementById('codigo').value.trim(),
      precio: parseFloat(document.getElementById('precio').value),
      marca: document.getElementById('marca').value.trim(),
      stock: parseInt(document.getElementById('stock').value),
    };

    // Recuperar productos almacenados o iniciar uno nuevo
    const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];

    // Agregar el nuevo producto
    productosGuardados.push(nuevoProducto);

    // Guardar de nuevo en localStorage
    localStorage.setItem('productos', JSON.stringify(productosGuardados));

    // Confirmar al usuario
    alert('¡Producto registrado y guardado exitosamente!');

    // Limpiar los campos
    this.reset();

    // (Opcional) Mostrar en consola
    console.log(productosGuardados);
  });

});