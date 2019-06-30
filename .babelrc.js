module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '55',
          ie: '11',
        },
        loose: true,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [['@babel/plugin-proposal-class-properties', { loose: true }]],
  env: {
    test: {
      plugins: [
        'babel-plugin-rewire',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
};
