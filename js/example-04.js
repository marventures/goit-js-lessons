/* Example 4 (Modal Window) */

const openModalBtn = document.getElementById('openModalBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

openModalBtn.addEventListener('click', handleModalOpen);
closeBtn.addEventListener('click', handleModalClose);
overlay.addEventListener('click', handleModalClose);
document.body.addEventListener('keydown', handleModalCloseOnESC);

// Modal Open Handler
// function handleModalOpen() {
//   document.body.classList.add('open');
// }

// Modal Close Handler
// function handleModalClose() {
//   document.body.classList.remove('open');
// }

// Modal Close On Esc Handler
// function handleModalCloseOnESC({ key }) {
//   // let key = event.key
//   if (key === 'Escape') handleModalClose();
// }
