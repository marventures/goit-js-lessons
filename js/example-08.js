/* 
Example 8 - forEach method

Make the code refactoring using forEach method and arrow functions. 
*/

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

const printContactsInfo = ({ names, phones }) => {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }

  nameList.forEach((el, idx) => {
    console.log(`${el}: ${phoneList[idx]}`);
  });
};

// // write code below this line

printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});

// const items = [1, 2, 3, 4, 5];

// items.forEach((item)=> {
// console.log(item)
// })
