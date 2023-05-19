// toggle password
const eyesClose = document.querySelector('.eyes-close');
const eyesOpen = document.querySelector('.eyes-open');
const inputPassword = document.querySelector('#password');

const showPassword = () => {
  inputPassword.type = 'text';
  eyesClose.classList.add('d-none');
  eyesOpen.classList.add('d-block');
};

const hidePassword = () => {
  inputPassword.type = 'password';
  eyesClose.classList.remove('d-none');
  eyesOpen.classList.remove('d-block');
};

// Login user
const logIn = () => {
  const usernameValue = document.querySelector('#username').value;
  const passwordValue = document.querySelector('#password').value;
  const errMessage = document.querySelector('.form-password-message');
  const getToken = localStorage.getItem('token');

  console.log('click');
  try {
    const user = 'kminchelle';
    const pass = '0lelplR';
    if (getToken) {
      return window.location.assign(`index.html`);
    }
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: usernameValue,
        password: passwordValue,
        // expiresInMins: 60, // optional
      }),
    }).then((res) => {
      if (res.status !== 200) {
        console.log(res);
        errMessage.innerText = 'Wrong password or username';
        return false;
      }
      res.json().then((res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username);
        window.location.assign(`index.html`);
        console.log('success');
      });
    });
  } catch (error) {
    alert(error.message);
  }
};
