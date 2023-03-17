import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';

export default {
  input: '../src/index.js', // 入口文件
  output: {
    name: 'MyLibrary', // UMD模块名称
    file: 'dist/my-library.js', // 输出文件名
    format: 'umd', // 输出格式
    inlineDynamicImports: true, // 动态加载模块内联 => 起不到分模块的作用
  },
  plugins: [
    nodeResolve(), // 解析node_modules中的模块
    commonjs(), // 转换CommonJS模块为ES6
    babel({
      exclude: 'node_modules/**', // 不编译node_modules中的模块
      babelHelpers: 'runtime', // 使用@babel/runtime作为helper函数
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: ['@babel/plugin-syntax-dynamic-import', '@babel/plugin-transform-runtime']
    }), // 使用Babel转换代码
    json() // 解析json文件
  ],
};
