module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js'],
        root: ['./'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@config': './src/config',
          '@pages': './src/pages',
          '@service': './src/service',
          '@store': './src/store',
          '@utils': './src/utils'
        }
      }
    ]
  ]
}
