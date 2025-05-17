const modalHTML = `
  <div id="applyModal" style="display:none; position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.6); justify-content:center; align-items:center;">
    <div style="background:#fff; padding:2rem; border-radius:10px; max-width:400px; width:90%; position:relative;">
      <button id="closeModal" style="position:absolute; top:10px; right:15px; font-size:1.5rem; cursor:pointer;">&times;</button>
      <h2>Apply to Join</h2>
      <form id="applyForm">
        <input type="text" id="name" name="name" placeholder="Full Name" required style="width:100%; margin-bottom:1rem; padding:0.5rem;">
        <input type="email" id="email" name="email" placeholder="Email" required style="width:100%; margin-bottom:1rem; padding:0.5rem;">
        <textarea id="message" name="message" placeholder="Why do you want to join?" rows="4" required style="width:100%; margin-bottom:1rem; padding:0.5rem;"></textarea>
        <button type="submit" style="background:#5e548e; color:#fff; border:none; padding:0.5rem 1rem; border-radius:6px; cursor:pointer;">Submit</button>
      </form>
      <p id="formResponse" style="color:green; display:none; margin-top:1rem;">Thank you for applying!</p>
    </div>
  </div>
`;
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
