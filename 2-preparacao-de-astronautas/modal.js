const buttonOpenModal = document.querySelector('#openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

buttonOpenModal.addEventListener('click', abrirModal);

function abrirModal() {
  const modal = document.querySelector('.modal-wrapper');
  modal.classList.remove('invisible');
}


document.addEventListener('keydown', function (event) {
    console.log(event);
  
    const isEscKey = event.key === 'Escape'
  
    if(isEscKey) {
      modalWrapper.classList.add('invisible')
    }
  })
