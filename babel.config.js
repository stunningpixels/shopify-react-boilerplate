module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'transform-assets-import-to-string',
      {
        baseDir: '/static',
      },
    ],
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
    'wildcard',
  ],
};
