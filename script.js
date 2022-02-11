const form = document.getElementById('form');

let validation = document.createElement('span');
validation.classList.add('invalid');
validation.innerText = 'Oops! Please check your email';

function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {
    alert('Valid email address!');
  } else {
    form.appendChild(validation);
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  console.log(email);
  ValidateEmail(email);
});
