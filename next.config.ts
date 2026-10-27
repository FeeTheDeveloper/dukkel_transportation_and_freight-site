import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests"
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  ...(isProduction ? [{ key: "Content-Security-Policy", value: contentSecurityPolicy }] : [])
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  images: {
    // Media is pre-encoded to fixed WebP widths (see lib/image-loader.ts),
    // so no runtime image optimizer is needed on Cloudflare.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
    deviceSizes: [640, 960, 1280, 1920],
    imageSizes: [320, 480]
  },
  async headers() {
    // Static files under public/ are served by Workers assets; their cache
    // headers live in public/_headers.
    return [{ source: "/:path*", headers: securityHeaders }];
  }
};

export default nextConfig;

if (!isProduction) {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => initOpenNextCloudflareForDev());
}
