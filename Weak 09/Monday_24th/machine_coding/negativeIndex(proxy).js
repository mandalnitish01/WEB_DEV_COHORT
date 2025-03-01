// // console.log(arr[-1]);

// const user = {
//     name: "hitesh",
//     age: 40,
//     password: "123",
//   };

//   const proxyUser = new Proxy(user, {
//     get(target, prop) {
//     //   console.log(prop);
//       if (prop === "password") {
//         throw new Error("Access Denied");
//       }
//       return target[prop];
//     },
//     // set(target, prop, user){}
//   });
//   console.log(proxyUser.password);

// function negativeIndex(arr) {
//   return new Proxy(arr, {
//     get(target, prop) {
//       const index = Number(prop);
//       if (index < 0) {
//         return target[target.length + index];
//       }
//       return target[index];
//     },
//     set(target, prop, value) {
//       const index = Number(prop);
//       if (index < 0) {
//         target[target.length + index] = value;
//       } else {
//         target[index] = value;
//       }
//       return true;
//     },
//   });
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = negativeIndex(arr);

// console.log(arr[-1]);
// console.log(newArr[-1]);
// newArr[-1] = 22;
// console.log(newArr);
// console.log(arr);

//reveson

// function negativeindex(arr) {
//   return new Proxy(arr, {
//     get(target, prop) {
//       const index = Number(prop);
//       if (index < 0) {
//         return target[target.length + index];
//       }
//       return target[index];
//     },
//     set(target,prop,value) {
//       const index = Number(prop);
//       if(index < 0){
//           target[target.length + index] = value;
//       }
//       else{
//      target[index] = value;
//       }
//       return true;
//     },
//   });
// }

// const arr = [1,2,3,4,54,5];
// const newproxy = negativeindex(arr)
// console.log(newproxy[2])
// console.log(newproxy[-2])
// console.log(newproxy[-1])
// newproxy[2] = 45;
// console.log(newproxy[2])
// newproxy[-2] = 900;
// console.log(newproxy[-2])
// console.log(arr)
// //   console.log(newproxy)

const user = {
  fname: "hitesh",
  Lname: "chaudhary",
  age: 40,
  password: "123",
};

const proxyUser = new Proxy(user, {
  get(target, prop) {
    //   console.log(prop);
    if (prop in target) {
      return target[prop];
    }
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return false;
  },
  set(target, prop, user) {
    if (!(prop in target)) {
      throw new Error(`${prop} does not exists`);
    }
    switch (prop) {
      case "fname":
      case "Lname": {
        if (typeof value !== "string")
          throw new Error(`${prop} must be string`);
        break;
      }
      case "age": {
        if (typeof value !== "Number") {
          throw new Error(`${prop} should be a number`);
        }
        if (value >= 0) {
          throw new Error(`${prop} must be greater then 0`);
        }
      }
    }
  },
});
console.log(proxyUser.password);
