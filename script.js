const colorBtn = document.getElementById('colorBtn');
const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');
const colors = [
  'linear-gradient(135deg, #667eea, #764ba2)',
  'linear-gradient(135deg, #f093fb, #f5576c)',
  'linear-gradient(135deg, #4facfe, #00f2fe)',
  'linear-gradient(135deg, #43e97b, #38f9d7)',
  'linear-gradient(135deg, #fa709a, #fee140)'
];
let colorIndex = 0;
colorBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colors.length;
  document.body.style.background = colors[colorIndex];
  message.textContent = `Background changed! Color ${colorIndex + 1}`;
});
greetBtn.addEventListener('click', () => {
  message.textContent = 'Hello SIRIBA! Welcome to Dominion of Sight! 👁️✨ Your Lab 3 is LIVE!';
});
console.log("MIT-1131-LAB3 - Dominion of Sight is working!");
