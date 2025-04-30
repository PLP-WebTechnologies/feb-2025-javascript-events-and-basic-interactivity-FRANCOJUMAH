// Event Handling 🎈
document.getElementById('clickButton').addEventListener('click', () => alert('Button clicked!'));
document.getElementById('hoverButton').addEventListener('mouseover', () => alert('Hovered over button!'));
document.getElementById('keyInput').addEventListener('keypress', (e) => alert(`You pressed: ${e.key}`));
document.getElementById('secretButton').addEventListener('dblclick', () => alert('Secret double-click action!'));

// Interactive Elements 🎮
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
  colorButton.style.backgroundColor = colorButton.style.backgroundColor === 'blue' ? 'green' : 'blue';
});

const tabs = document.querySelectorAll('.tab-button');
tabs.forEach(tab => tab.addEventListener('click', (e) => {
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById(e.target.dataset.tab).classList.add('active');
}));

// Form Validation 📋✅
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const formFeedback = document.getElementById('formFeedback');

emailInput.addEventListener('input', () => {
  const emailError = document.querySelector('#email + .error');
  emailError.classList.toggle('hidden', emailInput.checkValidity());
});

passwordInput.addEventListener('input', () => {
  const passwordError = document.querySelector('#password + .error');
  passwordError.classList.toggle('hidden', passwordInput.value.length >= 8);
});

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  formFeedback.textContent = 'Form submitted successfully!';
  formFeedback.className = 'success';
  formFeedback.classList.remove('hidden');
});