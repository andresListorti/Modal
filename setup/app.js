// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const elBotonModal = document.querySelector('.modal-btn');
const elOverlayDelModal = document.querySelector('.modal-overlay');
const elBotonDeCerrarModal = document.querySelector('.close-btn');

elBotonModal.addEventListener('click', function(){
    elOverlayDelModal.classList.add('open-modal');
})
elBotonDeCerrarModal.addEventListener('click', function(){
    elOverlayDelModal.classList.remove('open-modal');
})