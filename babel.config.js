module.exports = (api) => {
  api.cache(true);
  return {
    plugins: ['babel-plugin-transform-goober', '@agney/babel-plugin-goober-css-prop'],
    presets: [
      [
        'babel-preset-gatsby',
        {
          targets: {
            browsers: ['>0.25%', 'not dead'],
          },
        },
      ],
    ],
  };
};
