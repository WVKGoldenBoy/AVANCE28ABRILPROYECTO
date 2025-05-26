const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const navigation = document.getElementById('navigation');
const registrarBtn = document.getElementById('registrar-page');
const productos = [];


abrir.addEventListener('click', () => {
  navigation.classList.add('active');
  abrir.style.display = 'none';   
  cerrar.style.display = 'block';  
});

cerrar.addEventListener('click', () => {
  navigation.classList.remove('active');
  cerrar.style.display = 'none';  
  abrir.style.display = 'block';   
});

registrarBtn.addEventListener('click', () => {
  window.location.href = 'paginas/registrar.html';
});

document.addEventListener('DOMContentLoaded', () => {
  
  const formRegistro = document.getElementById('formRegistro');
});