
console.log('start=====');

function aGetName() {
  // import('./comp').then(({getName}) => {
  //   console.log('dynamic import:', getName());
  //   return getName();
  // })
}


function main(params) {
  console.log('input params:', params);
}

export default {
  show: main,
  getName: aGetName,
}
