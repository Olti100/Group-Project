
document.body.insertAdjacentHTML('beforeend', modalHTML);

const applyModal = document.getElementById('applyModal');
const closeModalBtn = document.getElementById('closeModal');
const applyForm = document.getElementById('applyForm');
const formResponse = document.getElementById('formResponse');

document.querySelectorAll('.apply-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    formResponse.style.display = 'none';
    applyForm.style.display = 'block';
    applyForm.reset();
    applyModal.style.display = 'flex';
  });
});

closeModalBtn.addEventListener('click', () => {
  applyModal.style.display = 'none';
});

applyForm.addEventListener('submit', e => {
  e.preventDefault();
  applyForm.style.display = 'none';
  formResponse.style.display = 'block';
});
