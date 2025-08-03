const wrapper = document.getElementById('wrapper');
const btnToggle = document.getElementById('btn-toggle');

btnToggle.addEventListener('click', () => {
  const isOpen = wrapper.classList.toggle('open');
  btnToggle.textContent = isOpen
    ? 'CANCELAR RESERVA'
    : 'RESERVAR EN LINEA ';
});
