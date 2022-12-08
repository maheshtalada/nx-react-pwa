module.exports = {
  globDirectory: "dist/apps/pwa",
  globPatterns: ["**/*.{txt,ico,html,js}"],
  swDest: "dist/apps/pwa/service-worker.js",
  runtimeCaching: [
    {
      // runtime cache for images
      urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      handler: 'CacheFirst',
      options: {
        expiration: { maxEntries: 10 },
        cacheName: 'images',
      },
    },
  ]
};
