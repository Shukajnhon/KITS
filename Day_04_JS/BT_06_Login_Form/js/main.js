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

  try {
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
      res.json().then((res) => console.log(res));
      console.log('success');
      console.log(res);
      // window.location.assign(`index.html`);
    });
  } catch (error) {
    alert(error.message);
  }
};

// =====================================Index
// Khi người dùng ấn nút mũi tên ở chỗ setting, tab setting đóng lại, nhấn vào side bar cam thì hiện ra thẻ setting
const arrowSettingLeft = document.querySelector(
  '.side-bar-right__setting-arrow-left'
);
const sidebarRight = document.querySelector('.sideBar-right');
const containerLeft = document.querySelector('.container-left');
const sidebarLeft = document.querySelector('.sideBar-left');

const cancelBtn = document.querySelector('.cancel-btn');
const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const email = document.getElementById('email');
const address = document.getElementById('address');
const contact = document.getElementById('contact');
const city = document.getElementById('city');
const formControl = document.querySelector('.form-control');

const saveBtn = document.querySelector('.save-btn');

// close Setting when click arrow icon setting
const closeSetting = () => {
  sidebarRight.style.display = 'none';
  containerLeft.style.borderRight = 'none';
};

// Show setting when click sidebar
const showSetting = () => {
  sidebarRight.style.display = 'block';
  containerLeft.style.borderRight = '1px solid #858585';
};

// 2. khi người dùng nhấn vào cancel -> xóa tất cả giá trị trong form
// reset form function
// const resetForm = () => {
//   fName.value = '';
//   lName.value = '';
//   email.value = '';
//   address.value = '';
//   contact.value = '';
//   city.value = '';
// };

const resetForm = () => {
  formControl.reset();
};

// 3 .Khi người dùng chọn vào mục nào thên thẻ setting thì tên và icon in đậm.

// 4. Khi người dùng nhấn Save btn, kiểm tra thông tin người dùng nhập vào tất cả các giá trị không đc bỏ trống,
// nếu bỏ trống thì tô đỏ border ô input

const validateForm = () => {
  let isCheck = true;

  const fNameValue = fName.value;
  const lNameValue = lName.value;
  const emailValue = email.value;
  const addressValue = address.value;
  const contactValue = contact.value;
  const cityValue = city.value;

  if (fNameValue === '') {
    isCheck = false;
  }
  if (lNameValue === '') {
    isCheck = false;
  }
  if (emailValue === '') {
    isCheck = false;
  }
  if (addressValue === '') {
    isCheck = false;
  }
  if (contactValue === '') {
    isCheck = false;
  }
  if (cityValue === '') {
    isCheck = false;
  }

  return isCheck;
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

const checkSubmit = (e) => {
  console.log(e);
  if (fName.value === '') {
    fName.style.border = '1px solid red';
  }
  if (lName.value === '') {
    lName.style.border = '1px solid red';
  }
  if (email.value === '') {
    email.style.border = '1px solid red';
  }
  if (address.value === '') {
    address.style.border = '1px solid red';
  }
  if (contact.value === '') {
    contact.style.border = '1px solid red';
  }
  if (city.value === '') {
    city.style.border = '1px solid red';
  }
};
