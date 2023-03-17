(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.myLib = factory());
})(this, (function () { 'use strict';

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
  var index = {
      show: main,
      getName: aGetName,
  };

  return index;

}));
