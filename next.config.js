const basePath = '/company-site-app_bootcamp-project'; // or '' if basePath needs to be left unchanged
const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : '';

module.exports = {
  assetPrefix: webpackBasePath,
};