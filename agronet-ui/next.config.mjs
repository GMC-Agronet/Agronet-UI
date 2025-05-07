const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = 'source-map'; // Enable client-side source maps
    }
    return config;
  },
};

export default nextConfig;
