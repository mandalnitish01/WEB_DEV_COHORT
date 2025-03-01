// console.log(arr[-1]);

const user = {
    name: "hitesh",
    age: 40,
    password: "123",
  };

  const proxyUser = new Proxy(user, {
    get(target, prop) {
    //   console.log(prop);
      if (prop === "password") {
        throw new Error("Access Denied");
      }
      return target[prop];
    },
    // set(target, prop, user){}
  });
  console.log(proxyUser.password);

//   function negativeIndex(arr) {
//     return new Proxy(arr, {
//       get(target, prop) {
//         const index = Number(prop);
//         if (index < 0) {
//           return target[target.length + index];
//         }
//         return target[index];
//       },
//       set(target, prop, value) {
//         const index = Number(prop);
//         if (index < 0) {
//           target[target.length + index] = value;
//         } else {
//           target[index] = value;
//         }
//         return true;
//       },
//     });
//   }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newArr = negativeIndex(arr);

// console.log(arr[-1]);
// console.log(newArr[-1]);
// newArr[-1] = 22;
// console.log(newArr);
// console.log(arr);




//reveson

// function negativeindexchech(arr) {
//   //proxy syntax :- new proxy(kis_pr_krna_hai , kya_krna_hai)
//   return new Proxy(arr, {
//     //get syntax:- get(kiss_array_pr , kiss_index_prr)
//     get(target, prop) {
//       const index = Number(prop); //checking index is numer or something else
//       if (index < 0) {
//         return target[target.length + index];
//       }
//        else {
//         return target[index];
//       }
//     },
//     Set(target, prop, value) {
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
// // 10 + (-4)
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newarr = negativeindexchech(arr);

// console.log(newarr[1]);
// console.log(newarr[-4]);
// newarr[-1] = 223
// // console.log(newarr[-1])
// console.log(newarr)
// console.log(arr)