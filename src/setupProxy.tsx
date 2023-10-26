import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://minseo-portfolio.shop",
      changeOrigin: true,
      onProxyReq: (proxyReq: any) => {
        proxyReq.removeHeader("Origin");
      },
    })
  );
};
