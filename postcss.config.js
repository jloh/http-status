// postcss.config.js
const cssnano = require('cssnano');

// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    // If we aren't in development (default of `hugo server`) minify
    ...process.env.HUGO_ENVIRONMENT !== 'development'
      ? [cssnano]
      : [],
  ]
}
