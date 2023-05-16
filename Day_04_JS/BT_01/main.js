console.log('Hello world');

// 1
const multi = (a, b) => a * b;
console.log(multi(5, 6));

// 2
const even_odd = (a) =>
  a % 2 === 0
    ? console.log(a, 'là số chẵn')
    : console.log(console.log(a, 'là số lẻ'));

even_odd(6);

// 3
const callName = (name) => {
  let greeting = 'xin chao ';
  return greeting + name;
};

console.log(callName('Hieu'));

// 4
const callNameAndAge = (name, age) => {
  let greeting = 'xin chao ';
  this.age = age + ' tủi';
  let nameAge = greeting + name + ' ' + this.age;
  return nameAge;
};

console.log(callNameAndAge('Hieu', 8));

// const diemTb = (x) => {
//   let str;
//   if (x < 5) {
//     return (str = 'không đạt');
//   } else if (x >= 5 && x < 6.5) {
//     return (str = 'đạt');
//   } else if (x >= 6.5 && x < 8) {
//     return (str = 'khá');
//   } else if (x >= 8 && x <= 10) {
//     return (str = 'khá');
//   }

//   switch (str) {
//     case str === 'không đât':
//       console.log('Không đạt');
//       break;
//     case x >= 5 && x < 6.5:
//       console.log('Đạt');
//       break;
//     case x >= 6 && x < 8:
//       console.log('Khá');
//       break;
//     case x >= 8 && x <= 10:
//       console.log('Giỏi');
//       break;
//     default:
//       console.log('Điểm không hợp lệ!!!');
//   }
// };
// diemTb(2);

// switch case
const x = 8;
let kq;
switch (true) {
  case x < 5:
    kq = 'Không đạt';
    console.log(kq);
    break;
  case x >= 5 && x < 6.5:
    kq = 'Đạt';
    console.log(kq);
    break;
  case x >= 6 && x < 8:
    kq = 'Khá';
    console.log(kq);
    break;
  case x >= 8 && x <= 10:
    kq = 'Giỏi';
    console.log(kq);
    break;
  default:
    console.log('Điểm không hợp lệ!!!');
}

// ======================================================================

const printNum = (x) => {
  for (let i = 0; i <= x; i++) {
    console.log(i);
  }
};
printNum(4);

const sumFrom1To100 = (x) => {
  let total = 0;
  for (let i = 0; i <= x; i++) {
    total += i;
  }
  console.log(total);
};

sumFrom1To100(100);

const bangCuuChuong9 = (x) => {
  for (let i = 1; i <= 10; i++) {
    let multi = x * i;
    console.log(`${x} * ${i} = ${multi}`);
  }
};

bangCuuChuong9(9);

// ====================================================================
// DOM

const introClass = document.querySelector('.introduce');
const introID = document.querySelector('#introduce');

introClass.style.color = 'blue';
introID.style.color = 'red';

introID.innerText = 'I am Hieu';

const nameList = document.getElementsByName('1');
nameList[0].innerText = '1';
console.log(nameList);

const para = document.createElement('p');
para.innerText = 'This is para';
para.style.color = 'violet';
document.body.appendChild(para);

const changeName = () => {
  const myName = document.querySelector('.myName');
  myName.innerText = 'Tri Hieu';
};

const submit_form = () => {
  alert('form has been submit');
};

const selectOnchange = () => {
  const select = document.querySelector('#select');
  const valueSelect = select.value;
  const text = document.querySelector('#demo');
  text.innerText = 'You choose: ' + valueSelect + ' car';
};

const changeColor = () => {
  document.querySelector('.changeColorInput').style.color = 'red';
};

const students = [
  'Vỹ',
  'Khương',
  'Quỳnh Anh',
  'Nhất Anh',
  'Tiến Anh',
  'Đức Anh',
];
console.log(students);
console.log('chiều dài của mảng: ', students.length);

// Tìm vị trí Nhất Anh
const viTri = students.indexOf('Nhất Anh');
console.log(`Vị trí của Nhất Anh là ${viTri}`);
// xóa phần tử đầu tiên Array
console.log('xóa bạn đầu tiên: ', students.shift());

// tạo string mới chứa tên các bạn và nối với nhau bằng dấu gạch nối
console.log(students.join(' - '));

// Xóa bỏ Quỳnh Anh ra array
const viTriQuynhAnh = students.indexOf('Quỳnh Anh');
const removeQuynhAnh = students.splice(viTriQuynhAnh, 1);
console.log(removeQuynhAnh);
console.log('Quỳnh Anh has been remove', students);

const students2 = ['Sơn Anh', 'Phước'];
console.log('nối mảng:', students2.concat(students));

// ====================================================================
console.log(Math.floor(Math.random() * 100) + 1);

// viết 1 function return 1 số từ x đến y

const numXtoY = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min + 1)) + min);
};

numXtoY(1, 6);
