const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

const keys = Object.keys(person);

const values = Object.values(person);

console.log('keys: ', keys);
console.log('values: ', values);
// ==========================================================================================
// String

let originalString = 'Lop hoc web cua KITS';

// độ dài chuỗi
const stringLength = originalString.length;
console.log('độ dài chuỗi: ', stringLength);

// lấy chữ web bằng hàm slice
const viTriWeb = originalString.indexOf('web');
// console.log(viTriWeb);
const sliceWeb = originalString.slice(8, 11);
console.log('slice chữ web:', sliceWeb);

// Thay tất cả khoảng trống bằng dấu phẩy
const thayKhoangTrong = originalString.split(' ');
console.log(thayKhoangTrong);

// Viết 1 hàm kiểm tra chuỗi truyền vào có chứa từ 'DEV'hay không?
const findWord = (word) => {
  return originalString.includes(word);
};

console.log(findWord('web'));
