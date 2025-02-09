/* webpack.config.js */
const path = require("path")
const webpack = require("webpack")

module.exports = {
  // Tell Webpack which file kicks off our app.
  entry: './src/index.js',
  // Tell Weback to output our bundle to ./dist/bundle.js
  output: {
    path: path.resolve(__dirname, './static/frontend'),
    filename: "[name].js",
  },
  // Tell Webpack which directories to look in to resolve import statements.
  // Normally Webpack will look in node_modules by default but since we’re overriding
  // the property we’ll need to tell it to look there in addition to the
  // bower_components folder.
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, 'bower_components')
    ]
  },
  // These rules tell Webpack how to process different module types.
  // Remember, *everything* is a module in Webpack. That includes
  // CSS, and (thanks to our loader) HTML.
  module: {
    rules: [
      {
        // If you see a file that ends in .html, send it to these loaders.
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        // This is an example of chained loaders in Webpack.
        // Chained loaders run last to first. So it will run
        // polymer-webpack-loader, and hand the output to
        // babel-loader. This let's us transpile JS in our `<script>` elements.
        use: 
          { loader: 'babel-loader' },
         
        
      },
     
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',

  // Enable the Webpack dev server which will build, serve, and reload our
  // project on changes.
//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     compress: true,
//     port: 9000
//   },
 optimization:{
    minimize: true,
 },
  plugins: [
    // This plugin will generate an index.html file for us that can be used
    // by the Webpack dev server. We can give it a template file (written in EJS)
    // and it will handle injecting our bundle for us.
    //if we running on prod we uncomment prod, if we running on dev we comment on prod
    new webpack.DefinePlugin({
        "process.env" : {
            // NODE_ENV: JSON.stringify("production"),
            NODE_ENV: JSON.stringify("development"),
           
        },
        stats: {
            errorDetails: true,
        }
    }),

    
    
    // This plugin will copy files over to ‘./dist’ without transforming them.
    // That's important because the custom-elements-es5-adapter.js MUST
    // remain in ES2015. We’ll talk about this a bit later :)
    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
    //   to: 'bower_components/webcomponentsjs/[name].[ext]'
    // }])
  ]
};