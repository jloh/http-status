// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project
  content: [
    'src/**/*.njk',
  ],
  whitelist: [
    'pre'
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

const cssnano = require('cssnano');

// postcss.config.js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, cssnano]
      : [],
  ]
}