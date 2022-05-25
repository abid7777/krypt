const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-preset-env': {},
    tailwindcss: {},
    ...(isProductionMode ? { autoprefixer: {} } : {}),
    ...(isProductionMode ? { cssnano: {} } : {}),
  },
};
