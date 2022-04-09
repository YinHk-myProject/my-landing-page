const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/converter',
    createProxyMiddleware({
      target: 'http://Yinhkcurrencysvc-env.eba-pypgtkpm.us-west-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/historical_rates',
    createProxyMiddleware({
      target: 'http://Yinhkcurrencysvc-env.eba-pypgtkpm.us-west-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
};