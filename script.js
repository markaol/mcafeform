const form = document.getElementById('refundForm');
const successMessage = document.getElementById('successMessage');
const txnId = document.getElementById('txnId');

const generateTxnId = () => {
  const prefix = 'REF';
  const date = new Date();
  const stamp = date.toISOString().slice(0, 10).replace(/-/g, '');
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${stamp}-${randomNum}`;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const bankName = document.getElementById('bankName').value.trim();

  if (!name || !email || !amount || !bankName) {
    alert('Please fill in all required fields before submitting.');
    return;
  }

  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!validation) {
    alert('Please enter a valid email address.');
    return;
  }

  txnId.textContent = generateTxnId();
  form.reset();
  form.classList.add('hidden');
  successMessage.classList.remove('hidden');
});
