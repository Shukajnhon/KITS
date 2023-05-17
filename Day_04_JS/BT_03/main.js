// 1. Viết hàm kiểm tra số n có phải số nguyên tố
const kiemTraSoNguyenTo = (n) => {
  let count = 1;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
  //   }
};

// console.log(kiemTraSoNguyenTo(1594323)); // false
// console.log(kiemTraSoNguyenTo());
console.log(kiemTraSoNguyenTo(15));

// Bài tập 2: Viết chương trình cho người dùng nhập vào số n lớn hơn 0, sau đó dựa vào n tính giá trị của biểu thức:
// express = 1/n + 2/n + 3/n ... n/n

const express = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log('i', i);

    // for (let j = n; i <= 1; i--) {
    //   console.log('j', j);
    // }
  }
};

console.log(express(6));
// =============================================================================================================================
