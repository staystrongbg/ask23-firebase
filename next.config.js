module.exports = {
  env: {
    GOOGLE_ANALYTICS: 'UA-227447780-1',
    MONGODB_URI:
      'mongodb+srv://ddamajadev:Istina888@cluster0.gpj1yuy.mongodb.net/proizvodi?retryWrites=true&w=majority',
    DB_PASSWORD: 'Istina888',
    DB_NAME: 'proizvodi',
  },
  //trailingSlash je neophodan kao u react _redirect
  trailingSlash: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    disableStaticImages: false,
    loader: 'custom',
  },
};
// process.env.NODE_ENV === 'production' && 'custom'
