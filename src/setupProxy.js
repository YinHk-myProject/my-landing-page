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
  app.use(
    '/past_converter',
    createProxyMiddleware({
      target: 'http://Yinhkcurrencysvc-env.eba-pypgtkpm.us-west-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/latest_rates',
    createProxyMiddleware({
      target: 'http://Yinhkcurrencysvc-env.eba-pypgtkpm.us-west-2.elasticbeanstalk.com',
      changeOrigin: true,
    })
  );
  app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
};