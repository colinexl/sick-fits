module.exports = {
  'parser': 'babel-eslint',
  'env': {
    'es6': true // this setting enables ES6 syntax automatically
  },
  'extends': [
    // 'airbnb-base', // airbnb rules without React
    'prettier',
    'prettier/react',
  ],
  'plugins': [
    'react', 'prettier'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  }
};
