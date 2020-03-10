module.exports = {
    entry: {
        app: './app/App.js'
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public'
    },
    mode:'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react','es2015']
          }
        }
      ]
    }
  }