/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
              "connect-src 'self' *.web3auth.io https://arb1.arbitrum.io https://api.cow.fi *.monerium.dev *.monerium.app  ; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' data:; " +
              "worker-src 'self';",
          },
        ],
      },
    ];
  },
};

// const config = withSentryConfig(nextConfig, {
//   // For all available options, see:
//   // https://github.com/getsentry/sentry-webpack-plugin#options

//   org: "sentry",
//   project: "internal",

//   // Only print logs for uploading source maps in CI
//   silent: !process.env.CI,

//   // For all available options, see:
//   // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

//   // Upload a larger set of source maps for prettier stack traces (increases build time)
//   widenClientFileUpload: true,

//   // Automatically annotate React components to show their full name in breadcrumbs and session replay
//   reactComponentAnnotation: {
//     enabled: true,
//   },

//   // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
//   // This can increase your server load as well as your hosting bill.
//   // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
//   // side errors will fail.
//   // tunnelRoute: "/monitoring",

//   // Hides source maps from generated client bundles
//   hideSourceMaps: true,

//   // Automatically tree-shake Sentry logger statements to reduce bundle size
//   disableLogger: true,

//   // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
//   // See the following for more information:
//   // https://docs.sentry.io/product/crons/
//   // https://vercel.com/docs/cron-jobs
//   automaticVercelMonitors: false,
// });

export default nextConfig;
