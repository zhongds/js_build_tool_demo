
console.log('start=====');

import('./comp').then(({getName}) => {
  console.log('dynamic import:', getName());
})

function main(params) {
  console.log('input params:', params);
}

export default main
