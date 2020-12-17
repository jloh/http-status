module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT !== 'development' ? true : false,
    content: [
      'layouts/**/*.html',
      'layouts/*.html',
      'content/*.md'       // Only look at the top level (ie pages) for now for speed
    ],
    options: {}
  },
  theme: {
    container: {
      center: true
    },
    extend: {},
  }
}
