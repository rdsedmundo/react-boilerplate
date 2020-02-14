module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: { version: 3, proposals: true },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: ['emotion'],
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.plugins.push('react-refresh/babel');
}
